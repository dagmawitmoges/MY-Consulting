import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/image.png'; 

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About Us', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gray-800 text-white text-center py-2">
        <p>🏗️ Get a Free Estimate on Your Next Project! Call us now!</p>
      </div>

      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-white-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img
                alt="MY Consulting"
                src={logo}
                className="h-18 w-auto mr-4"  // Adjust logo height
              />
            </div>
            <div className="flex flex-1 items-center justify-center">  {/* Center navigation items */}
              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'bg-amber-300 text-white' : 'text-gray-800 hover:bg-amber-300 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* Catchy Free Estimates Section */}
           <div className="flex items-center">
              <div className="bg-yellow-500 text-black font-bold rounded-md px-5 py-3 shadow-lg flex items-center">
                <span className="text-lg">CONTACT US</span>
                <span className="mx-2">|</span>
                <span className="text-lg">(608) 783-3101</span>
              </div>
            </div>
          </div>
          </div>


        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}