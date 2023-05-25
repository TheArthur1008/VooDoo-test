const productsList = document.querySelector(".products-list");
const chevronDownIcon = document.querySelector(".chevron-down");
const additionalInfo = document.querySelector("#additional-info");
const infoContainer = document.querySelector("#alpha-container");

const fetchData = async () => {
  const res = await fetch(
    "https://voodoo-sandbox.myshopify.com/products.json?limit=12"
  );
  const data = await res.json();
  return data;
};

chevronDownIcon?.addEventListener("click", () => {
  additionalInfo?.classList.toggle("hidden");
  chevronDownIcon.classList.toggle("rotate-180");
  infoContainer.classList.toggle("rounded-none");
});

const generateItems = async () => {
  const data = await fetchData();
  data.products.forEach((item) => {
    const newProduct = document.createElement("div");
    newProduct.innerHTML = `<div class='group mb-12 md:w-[350px] xl:w-[414px] relative lg:hover:cursor-pointer'>
                        <div class="mb-3 border border-black" id="card" >
                            <img
                                src="${item.images[0].src}"
                                alt="product"
                                class="object-cover h-full w-full z-10  md:h-full"
                            />
                            <div class="text-xs rounded bg-black text-white px-0.5 py-0.5 absolute top-2 left-2">USED</div>
                        </div>
                        
                        <div class="flex justify-between gap-2">
                            <span >${item.title}</span>
                            <span class='font-medium'>${item.vendor}</span>
                        </div>
                        
                        <div class="flex justify-between mb-3">
                            <span >${item.variants[0].price}$</span>
                            <span class="font-normal">${item.product_type}</span>
                            
                        </div>
                        <button class="lg:invisible lg:group-hover:visible lg:group-focus:visible bg-black text-center text-white w-full rounded p-3 h-10">PICK-UP IN <span class="underline">2200</span></button>
                        
                        
                    </div>`;

    productsList.appendChild(newProduct);
  });
};

generateItems();
