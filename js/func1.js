//--------------------------albums--------------------------

function hideDesc() {
            document.querySelectorAll('.deschidden').forEach(desc => {
                desc.style.display = 'none';
            });
        }
        function againDesc() {
            hideDesc();
            document.getElementById('again').style.display = 'block';
        }
        function mopnDesc() {
            hideDesc();
            document.getElementById('mopn').style.display = 'block';
        }
        function ageOfDesc() {
            hideDesc();
            document.getElementById('ageof').style.display = 'block';
        }
        function godDesc() {
            hideDesc();
            document.getElementById('god').style.display = 'block';
        }
        function riftsDesc() {
            hideDesc();
            document.getElementById('rifts').style.display = 'block';
        }
        function rPlusDesc() {
            hideDesc();
            document.getElementById('rplus').style.display = 'block';
        }
        function theFallDesc() {
            hideDesc();
            document.getElementById('thefall').style.display = 'block';
        }
        function drawnDesc() {
            hideDesc();
            document.getElementById('drawn').style.display = 'block';
        }
        function zonesDesc() {
            hideDesc();
            document.getElementById('zones').style.display = 'block';
        }
        function russianDesc() {
            hideDesc();
            document.getElementById('russian').style.display = 'block';
        }
        function betrayedDesc() {
            hideDesc();
            document.getElementById('betrayed').style.display = 'block';
        }
        function replicaDesc() {
            hideDesc();
            document.getElementById('replica').style.display = 'block';
        }


//--------------------------merch--------------------------

        let cart = [];
        let currentItem = null;

        function openItem(title, content, imgSrc) {
            document.getElementById('itemName').innerText = title;
            document.getElementById('itemDetails').innerText = content;
            document.getElementById('itemImage').src = imgSrc;
            document.getElementById('itemWindow').style.display = 'flex';
            currentItem = { title, content, imgSrc };
          }

          function closeItem() {
            document.getElementById('itemWindow').style.display = 'none';
          }

          function addToCart() {
            if (currentItem) {
              cart.push(currentItem);
              updateCart();
              closeItem();
            }
          }

          function toggleCart() {
            const cartContainer = document.getElementById('cartContainer');

            if (window.innerWidth <= 760) {
                cartContainer.style.display = cartContainer.style.display === 'flex' ? 'none' : 'flex';
              } else {
                cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
              }
            }

          function updateCart() {
            const cartItemsContainer = document.getElementById('cartItems');
            cartItemsContainer.innerHTML = '';
        
            cart.forEach((item, index) => {
              const cartItem = document.createElement('div');
              cartItem.classList.add('cart-item');
              cartItem.innerHTML = `
                <span>${item.title}</span>
                <button class="remove-button" onclick="removeFromCart(${index})">x</button>
              `;
              cartItemsContainer.appendChild(cartItem);
            });
          }

          function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
          }
        
          document.querySelectorAll('.shopitem').forEach(item => {
            item.addEventListener('click', () => {
              const img = item.querySelector('img');
              const title = img.getAttribute('data-title');
              const content = img.getAttribute('data-content');
              const imgSrc = img.getAttribute('src');
              openItem(title, content, imgSrc);
            });
          });


//--------------------------form--------------------------

document.getElementById('newslform').addEventListener('submit', function(event) {
    event.preventDefault();
    submitData();
  });
  
  function submitData() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !email || !emailPattern.test(email)) {
      document.getElementById("popupWindow").style.display = "flex";
      document.getElementById("windowTitl").innerText = 'Error';
      document.getElementById("windowP").innerText = 'Please enter the corresponding data in the required fields.';
    } else {
      console.log("Form submitted");
      document.getElementById("popupWindow").style.display = "flex";
      document.getElementById("windowTitl").innerText = 'Success!';
      document.getElementById("windowP").innerText = 'The data was submitted successfully.';
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }
  
  function closeWindow() {
    document.getElementById("windowTitl").innerText = '';
    document.getElementById("windowP").innerText = '';
    document.getElementById("popupWindow").style.display = "none";
  }
  