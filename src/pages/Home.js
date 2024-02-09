import React from "react";

function Home() {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <header class="bg-gray-50 ">
        <div class="py-2 md:py-3">
          <div class="flex items-center justify-between max-w-6xl px-4 mx-auto">
            <div class="flex items-center space-x-4">
              <a class="text-lg font-bold" href="#">
                Boutique
              </a>
              <div class="hidden md:flex items-center space-x-4">
                <a class="font-medium [&amp;:has(:hover)]-underline" href="#">
                  Clothing
                </a>
                <a class="font-medium [&amp;:has(:hover)]-underline" href="#">
                  Accessories
                </a>
                <a class="font-medium [&amp;:has(:hover)]-underline" href="#">
                  Shoes
                </a>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
                <span class="sr-only">Wishlist</span>
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span class="sr-only">Cart</span>
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span class="sr-only">Account</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main class="flex-1">
        <div class="grid gap-4 md:gap-6 max-w-6xl px-4 mx-auto py-4 md:py-8">
          <div class="flex justify-between gap-4">
            <div class="flex gap-4">
              <div class="flex gap-2">
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-md"
                  placeholder="Search products..."
                  type="search"
                />
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 hover:bg-primary">
                  Search
                </button>
              </div>
            </div>
            <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 bg-[#7c6923] text-white hover:bg-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-4 h-4 -translate-x-0.5 mr-2"
              >
                <line x1="4" x2="4" y1="21" y2="14"></line>
                <line x1="4" x2="4" y1="10" y2="3"></line>
                <line x1="12" x2="12" y1="21" y2="12"></line>
                <line x1="12" x2="12" y1="8" y2="3"></line>
                <line x1="20" x2="20" y1="21" y2="16"></line>
                <line x1="20" x2="20" y1="12" y2="3"></line>
                <line x1="2" x2="6" y1="14" y2="14"></line>
                <line x1="10" x2="14" y1="8" y2="8"></line>
                <line x1="18" x2="22" y1="16" y2="16"></line>
              </svg>
              Filters
            </button>
          </div>
          <div class="grid gap-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div class="relative group overflow-hidden rounded-lg shadow-md">
                <a class="absolute inset-0 z-10" href="#">
                  <span class="sr-only">View</span>
                </a>
                <img
                  alt="Product 1"
                  class="object-cover w-full h-60"
                  height="300"
                  src="/images/placeholder.svg"
                  width="400"
                  style={{aspectRatio: 400/300, objectFit: 'cover'}}
                />
                <div class="bg-white p-4 ">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Category: Sunglasses
                  </p>
                  <h3 class="font-semibold text-lg md:text-xl">
                    Stylish Sunglasses
                  </h3>
                  <h4 class="font-semibold text-sm md:text-base">$29.99</h4>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 mt-2 hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div class="relative group overflow-hidden rounded-lg shadow-md">
                <a class="absolute inset-0 z-10" href="#">
                  <span class="sr-only">View</span>
                </a>
                <img
                  alt="Product 2"
                  class="object-cover w-full h-60"
                  height="300"
                  src="/images/placeholder.svg"
                  width="400"
                  style={{aspectRatio: 400/300, objectFit: 'cover'}}
                />
                <div class="bg-white p-4 ">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Category: Bags
                  </p>
                  <h3 class="font-semibold text-lg md:text-xl">
                    Leather Crossbody Bag
                  </h3>
                  <h4 class="font-semibold text-sm md:text-base">$49.99</h4>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 mt-2 hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div class="relative group overflow-hidden rounded-lg shadow-md">
                <a class="absolute inset-0 z-10" href="#">
                  <span class="sr-only">View</span>
                </a>
                <img
                  alt="Product 3"
                  class="object-cover w-full h-60"
                  height="300"
                  src="/images/placeholder.svg"
                  width="400"
                  style={{aspectRatio: 400/300, objectFit: 'cover'}}
                />
                <div class="bg-white p-4 ">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Category: Electronics
                  </p>
                  <h3 class="font-semibold text-lg md:text-xl">
                    Wireless Headphones
                  </h3>
                  <h4 class="font-semibold text-sm md:text-base">$79.99</h4>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 mt-2 hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div class="relative group overflow-hidden rounded-lg shadow-md">
                <a class="absolute inset-0 z-10" href="#">
                  <span class="sr-only">View</span>
                </a>
                <img
                  alt="Product 4"
                  class="object-cover w-full h-60"
                  height="300"
                  src="/images/placeholder.svg"
                  width="400"
                  style={{aspectRatio: 400/300, objectFit: 'cover'}}
                />
                <div class="bg-white p-4 ">
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Category: Accessories
                  </p>
                  <h3 class="font-semibold text-lg md:text-xl">
                    Classic Wristwatch
                  </h3>
                  <h4 class="font-semibold text-sm md:text-base">$59.99</h4>
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-9 rounded-md px-3 mt-2 hover:bg-primary hover:text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <nav
            role="navigation"
            aria-label="pagination"
            class="mx-auto flex w-full justify-center"
          >
            <ul class="flex flex-row items-center gap-1">
              <li class="">
                <li class="">
                  <a
                    class="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pl-2.5"
                    aria-label="Go to previous page"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span>Previous</span>
                  </a>
                </li>
              </li>
              <li class="">
                <li class="">
                  <a
                    class="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-9 w-9"
                    href="#"
                  >
                    1
                  </a>
                </li>
              </li>
              <li class="">
                <li class="">
                  <a
                    aria-current="page"
                    class="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 w-9 bg-[#7c6923] text-white"
                    href="#"
                  >
                    2
                  </a>
                </li>
              </li>
              <li class="">
                <li class="">
                  <a
                    class="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-9 w-9"
                    href="#"
                  >
                    3
                  </a>
                </li>
              </li>
              <li class="">
                <li class="">
                  <a
                    class="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pr-2.5"
                    aria-label="Go to next page"
                    href="#"
                  >
                    <span>Next</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </a>
                </li>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center hidden">
        <div class="bg-white p-6 rounded-lg">
          <h2 class="text-lg font-semibold mb-4">Filter Options</h2>
          <div class="grid gap-4">
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="filter1"
            ></button>
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="filter1"
            >
              Filter 1
            </label>
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="filter2"
            ></button>
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="filter2"
            >
              Filter 2
            </label>
            <button
              type="button"
              role="checkbox"
              aria-checked="false"
              data-state="unchecked"
              value="on"
              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
              id="filter3"
            ></button>
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="filter3"
            >
              Filter 3
            </label>
          </div>
          <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
