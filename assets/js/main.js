// QUERY SELECTOR SNIPPET
const select = (selector, scope = document) => {
  return scope.querySelector(selector);
};
const selectAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector);
};

// DATE
let today = new Date();
let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0");
let yyyy = today.getFullYear();
selectAll(".date").forEach((el) => (el.innerText = `${dd}/${mm}/${yyyy}`));

// NAVIGATION
const scrollToElem = (elem) => {
  select(elem).scrollIntoView({ behavior: "smooth" });
};

// YEAR
selectAll(".year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});

// REVEALING ON SCROLL
const the_animation = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      // else {
      //     entry.target.classList.remove('active')
      // }
    });
  },
  { threshold: 0.3 }
);

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

// CARDS SWITCH
const chosenCards = selectAll(".chosen-review-card");
const reviewCards = selectAll(".reviews-card");

for (let i = 0; i < reviewCards.length; i++) {
  reviewCards[i].addEventListener("click", () => {
    chosenCards.forEach((el) => el.classList.remove("active"));
    select(`[data-user="${reviewCards[i].id}"]`).classList.add("active");
    reviewCards.forEach((el) => el.classList.add("visible"));
    select(`#${reviewCards[i].id}`).classList.remove("visible");
  });
}

// BRANDS CAROUSEL
var splide = new Splide(".splide", {
  perPage: 1,
  type: "loop",
  perMove: 1,
});
splide.mount();

// MODAL
const licenseModalCall = selectAll(".modal-call");
const licenseModalClose = select(".close-icon");
const licenseModal = select(".form-modal");
const modalContent = select(".modal-content");

function openModal() {
  licenseModal.classList.add("active");
}

function closeModal() {
  if (licenseModal.classList.contains("active")) {
    licenseModal.classList.remove("active");
  }
}

licenseModalCall.forEach((el) => el.addEventListener("click", openModal));
licenseModalClose.addEventListener("click", closeModal);
licenseModal.addEventListener("click", closeModal);
modalContent.addEventListener("click", (e) => e.stopPropagation());

// Form Submission
let nameValue = document.querySelector(".name");
let lastnameValue = document.querySelector(".lastname");
let emailValue = document.querySelector(".email");
let phoneValue = document.querySelector(".phone");
let requiredFields = document.querySelectorAll(".required-fields");

const formSubmission = () => {
  if (
    nameValue.value != "" &&
    lastnameValue.value != "" &&
    emailValue.value != "" &&
    phoneValue.value != ""
  ) {
    window.location.href = "thankyou.html";
  } else {
    requiredFields.forEach((e) => {
      e.classList.add("visible");
    });
  }
};

const inputFields = document.querySelectorAll(
  ".name, .lastname, .email, .phone"
);
for (let inputItem of inputFields) {
  inputItem.addEventListener("focus", function () {
    requiredFields.forEach((e) => {
      if (e.classList.contains("visible")) {
        e.classList.remove("visible");
      }
    });
  });
}
