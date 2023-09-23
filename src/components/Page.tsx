import NavBar from '@/components/NavBar';
import MainMenu from '@/menus/MainMenu';
import { ReactNode } from 'react';

export type PagePropTypes = {
  children?: ReactNode
}

/**
 * Layout of a default page in this app.
 *
 * @author [Jacob Head](https://github.com/HeadJk)
 */
const Page = ({ children }: PagePropTypes) => {
  return (
    <>
      <main>
        <NavBar menu={MainMenu} position='relative' />
        {children}
      </main>
    </>
  )
};

export default Page;