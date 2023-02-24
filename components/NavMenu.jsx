import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { menMenu, paijamaMenu, panjabiMenu, womenMenu } from './constants';

const NavMenu = ({ className }) => {
    return (
        <NavigationMenu.Root className={`relative z-10 flex w-screen ${className}`}>
            <NavigationMenu.List className="flex list-none p-1 ">
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="text-mauve12 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_px]">
                        Women{' '}
                        <CaretDownIcon
                            className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] grid-cols-[0.75fr_0.75fr]">
                            <li className="row-span-3 sm:grid hidden">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b  no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >
                                        <img className=' h-full object-cover object-center rounded-lg ' src="/assets/Menu-Femme_large.webp" alt="" />
                                        {/* <div className="mt-4 mb-[7px] text-[18px] font-semibold leading-[1.2] text-white p-[5px]">
                                            {''}
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3] ">
                                            {''}
                                        </p> */}
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            {
                                womenMenu.map((m, i) => {
                                    const { id, title, body } = m;
                                    return (
                                        <ListItem key={i} title={title} href={id}>
                                            {body}
                                        </ListItem>
                                    )
                                })
                            }
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="text-mauve12 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_px]">
                        Men{' '}
                        <CaretDownIcon
                            className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] grid-cols-[0.75fr_0.75fr]">
                            <li className="row-span-3 sm:grid hidden">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b  no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >
                                        <img className=' h-full object-cover object-center rounded-lg ' src="/assets/Menu-Homme_large.webp" alt="" />
                                        {/* <div className="mt-4 mb-[7px] text-[18px] font-semibold leading-[1.2] text-white p-[5px]">
                                            {''}
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3] ">
                                            {''}
                                        </p> */}
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            {
                                menMenu.map((m, i) => {
                                    const { id, title, body } = m;
                                    return (
                                        <ListItem key={i} title={title} href={id}>
                                            {body}
                                        </ListItem>
                                    )
                                })
                            }
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>


                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="text-mauve12 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]">
                        Panjabi{' '}
                        <CaretDownIcon
                            className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3 grid-cols-2">
                            <li className="row-span-3 sm:grid hidden">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b  no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >
                                        <img className=' h-full object-cover object-center rounded-lg ' src="/assets/PP-49a-420x420.jpg" alt="" />
                                        {/* <div className="mt-4 mb-[7px] text-[18px] font-semibold leading-[1.2] text-white p-[5px]">
                                            {''}
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3] ">
                                            {''}
                                        </p> */}
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            {
                                panjabiMenu.map((m, i) => {
                                    const { id, title, body } = m;
                                    return (<ListItem key={i} title={title} href={id}>
                                        {body}
                                    </ListItem>)
                                })
                            }
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="text-mauve12 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none outline-none focus:shadow-[0_0_0_2px]">
                        Panjabi{' '}
                        <CaretDownIcon
                            className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3 grid-cols-2">
                            <li className="row-span-3 sm:grid hidden">
                                <NavigationMenu.Link asChild>
                                    <a
                                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex 
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b  no-underline outline-none focus:shadow-[0_0_0_2px]"
                                        href="/"
                                    >
                                        <img className=' h-full object-cover object-center rounded-lg ' src="/assets/COVER1-300x300.jpg.webp" alt="" />
                                        {/* <div className="mt-4 mb-[7px] text-[18px] font-semibold leading-[1.2] text-white p-[5px]">
                                            {''}
                                        </div>
                                        <p className="text-mauve4 text-[14px] leading-[1.3] ">
                                            {''}
                                        </p> */}
                                    </a>
                                </NavigationMenu.Link>
                            </li>
                            {
                                paijamaMenu.map((m, i) => {
                                    const { id, title, body } = m;
                                    return (<ListItem key={i} title={title} href={id}>
                                        {body}
                                    </ListItem>)
                                })
                            }
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="text-mauve12 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="#"
                    >
                        Watch
                    </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="text-mauve12 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-semibold leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="#"
                    >
                        Waistcoat
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

            </NavigationMenu.List>

            <div className={`perspective-[2000px] absolute top-full left-0 flex w-full ${className}`}>
                <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu.Root>
    );
};

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <li>
        <NavigationMenu.Link asChild>
            <a
                className=
                'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors'
                {...props}
                ref={forwardedRef}
            >
                <div className="text-violet12 mb-[5px] font-semibold leading-[1.2]">{title}</div>
                <p className="text-mauve12 leading-[1.4]">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

export default NavMenu;