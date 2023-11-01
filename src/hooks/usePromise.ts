import { useEffect, useState } from "react";

function wrapPromise<T>(promise: Promise<T>) {
    let status = 'pending';
    let result : T;
    let suspender = promise.then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        }
    };
}

export function usePromise<T>(promise: Promise<T>) {
    const [resource, setResource] = useState<ReturnType<typeof wrapPromise<T>> | null>(null);
    useEffect(() => {
      const resource = wrapPromise(promise);
      setResource(resource);
    }, []);
  
    return resource?.read();
};