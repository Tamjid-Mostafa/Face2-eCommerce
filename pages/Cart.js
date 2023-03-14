import Button from '@/components/ui/Button'
import {
  Bag,
  Check,
  CreditCard,
  Cross,
  MapPin,
} from '@/components/layout/icons'
import { useUI } from '@/components/ui/context'
import Text from '@/components/ui/Text'
import React, { useState } from 'react'

const Cart = () => {
  const error = null
  const success = null
  const [isLoading, setIsLoading] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  const { openSidebar, setSidebarView } = useUI()

  const goToCheckout = () => {
    openSidebar()
    setSidebarView('CHECKOUT_VIEW')
  }

  return (
    <div className="grid gap-20 pt-4 lg:grid-cols-12">
      <div className="lg:col-span-7">
        {isLoading || isEmpty ? (
          <div className="flex flex-1 flex-col items-center justify-center px-12 py-24 ">
            <span className="flex h-16 w-16 items-center justify-center rounded-lg border border-dashed border-secondary bg-primary p-12 text-primary">
              <Bag className="absolute" />
            </span>
            <h2 className="pt-6 text-center text-2xl font-bold tracking-wide">
              Your cart is empty
            </h2>
            <p className="px-10 pt-2 text-center text-accent-6">
              Biscuit oat cake wafer icing ice cream tiramisu pudding cupcake.
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white">
              <Cross width={24} height={24} />
            </span>
            <h2 className="pt-6 text-center text-xl font-light">
              We couldn’t process the purchase. Please check your card
              information and try again.
            </h2>
          </div>
        ) : success ? (
          <div className="flex flex-1 flex-col items-center justify-center px-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white">
              <Check />
            </span>
            <h2 className="pt-6 text-center text-xl font-light">
              Thank you for your order.
            </h2>
          </div>
        ) : (
          <div className="flex-1 sm:px-6 lg:px-0">
            <Text variant="pageHeading">My Cart</Text>
            <Text variant="sectionHeading">Review your Order</Text>
            <ul className="space-y-6 border-b border-accent-2 py-6 sm:space-y-0 sm:divide-y sm:divide-accent-2 sm:py-0">
              {/* {data!.lineItems.map((item: any) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    currencyCode={data?.currency.code!}
                                />
                            ))} */}
            </ul>
            <div className="my-6">
              <Text>
                Before you leave, take a look at these items. We picked them
                just for you
              </Text>
              <div className="flex space-x-6 py-6">
                {[1, 2, 3, 4, 5, 6].map((x) => (
                  <div
                    key={x}
                    className="h-24 w-full transform cursor-pointer border border-accent-3 bg-accent-2 bg-opacity-50 duration-75 hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="lg:col-span-5">
        <div className="flex-shrink-0 px-4 py-24 sm:px-6">
          {process.env.COMMERCE_CUSTOMCHECKOUT_ENABLED && (
            <>
              {/* Shipping Address */}
              {/* Only available with customCheckout set to true - Meaning that the provider does offer checkout functionality. */}
              <div className="mb-4 flex cursor-pointer items-center justify-center rounded-md border border-accent-2 px-6 py-6 text-center hover:border-accent-4">
                <div className="mr-5">
                  <MapPin />
                </div>
                <div className="text-center text-sm font-medium">
                  <span className="uppercase">+ Add Shipping Address</span>
                  {/* <span>
                    1046 Kearny Street.<br/>
                    San Franssisco, California
                  </span> */}
                </div>
              </div>
              {/* Payment Method */}
              {/* Only available with customCheckout set to true - Meaning that the provider does offer checkout functionality. */}
              <div className="mb-4 flex cursor-pointer items-center justify-center rounded-md border border-accent-2 px-6 py-6 text-center hover:border-accent-4">
                <div className="mr-5">
                  <CreditCard />
                </div>
                <div className="text-center text-sm font-medium">
                  <span className="uppercase">+ Add Payment Method</span>
                  {/* <span>VISA #### #### #### 2345</span> */}
                </div>
              </div>
            </>
          )}
          <div className="border-t border-accent-2">
            <ul className="py-3">
              <li className="flex justify-between py-1">
                <span>Subtotal</span>
                <span>{'Subtotal'}</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </li>
              <li className="flex justify-between py-1">
                <span>Estimated Shipping</span>
                <span className="font-bold tracking-wide">FREE</span>
              </li>
            </ul>
            <div className="mb-10 flex justify-between border-t border-accent-2 py-3 font-bold">
              <span>Total</span>
              <span>{'total'}</span>
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="w-full lg:w-72">
              {isEmpty ? (
                <Button href="/" Component="a" width="100%">
                  Continue Shopping
                </Button>
              ) : (
                <>
                  {process.env.COMMERCE_CUSTOMCHECKOUT_ENABLED ? (
                    <Button Component="a" width="100%" onClick={goToCheckout}>
                      Proceed to Checkout ({total})
                    </Button>
                  ) : (
                    <Button href="/checkout" Component="a" width="100%">
                      Proceed to Checkout
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
