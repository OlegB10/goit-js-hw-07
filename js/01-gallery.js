import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону
//  елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй 
// CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з 
// документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
//  Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на
// елементі < img >, і вказуватися в href посилання.Не додавай інші HTML теги або CSS
// класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням 
// користувач буде перенаправлений на іншу сторінку.Заборони цю поведінку за замовчуванням.


const galleryEL = document.querySelector('.gallery');

const imagesList = ({preview, original, description}) => {
    return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>`;
  };

const addImg = galleryItems.map(imagesList).join('');
galleryEL.insertAdjacentHTML("afterbegin", addImg);

galleryEL.addEventListener('click', onImgClick );

function onImgClick (event){
const imageSelected = event.target.getAttribute("data-source");
  
event.preventDefault();

if (!imageSelected){return;}

const openModulWindow = basicLightbox.create(
        `<img src="${imageSelected}" width="800" height="600">`,
      {
        onShow: () => {document.addEventListener("keydown", closeModal);},
        onClose: () => {document.removeEventListener("keydown", closeModal);},
      }
      );
     openModulWindow.show();

  function closeModal(event) {
    if (event.key === "Escape") {
        openModulWindow.close();
    }
  }
};

