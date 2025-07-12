function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
  }
  
    const buttons = document.querySelectorAll('.mission-btn');
    const contentSets = document.querySelectorAll('.content-set');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        const targetId = btn.getAttribute('data-target');
  
        contentSets.forEach(set => {
          set.classList.remove('active');
        });
  
        const target = document.getElementById(targetId);
        if (target) target.classList.add('active');
      });
    });
  
    // IntersectionObserver로 스크롤 감지 후 float 효과 부여
   const bubbles = document.querySelectorAll('.bubble');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('floated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  bubbles.forEach(bubble => observer.observe(bubble));
  
  const fadeItems = document.querySelectorAll('.fade-item');
  
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  fadeItems.forEach(item => fadeObserver.observe(item));
  
    function handleScrollFade() {
      const elements = document.querySelectorAll('.scroll-fade');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', handleScrollFade);
    window.addEventListener('load', handleScrollFade);
  
  function handleScrollFade() {
    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', handleScrollFade);
  window.addEventListener('load', handleScrollFade);
  
document.addEventListener('DOMContentLoaded', function() {
  const typingTarget = document.getElementById('typing-effect');
  if (!typingTarget) return;

  const text = typingTarget.getAttribute('data-typing-text') || typingTarget.textContent.trim();
  typingTarget.textContent = '';
  let idx = 0;
  let typingStarted = false;

  function type() {
    if (idx <= text.length) {
      typingTarget.textContent = text.slice(0, idx);
      idx++;
      setTimeout(type, 70);
    } else {
      typingTarget.classList.remove('typing');
    }
  }

  function onScroll() {
    const rect = typingTarget.getBoundingClientRect();
    if (!typingStarted && rect.top < window.innerHeight * 0.8) {
      typingStarted = true;
      typingTarget.classList.add('typing');
      type();
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
  // 페이지 진입 시 이미 보이면 바로 실행
  onScroll();
});
  
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector('.partner-slider');
  if (!slider) return;

  // 1. 이미지 복제
  const images = Array.from(slider.children);
  images.forEach(img => {
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
  });

  function getSliderWidth(imgs) {
    let width = 0;
    imgs.forEach(img => {
      width += img.offsetWidth;
    });
    // gap 계산
    const style = getComputedStyle(slider);
    const gap = parseInt(style.gap || 0, 10);
    width += gap * (imgs.length - 1);
    return width;
  }

  function startInfiniteSlider() {
    const imgs = Array.from(slider.children).slice(0, images.length); // 원본만
    const sliderWidth = getSliderWidth(imgs);
    const duration = 30; // 25초에 한 바퀴
    const speed = sliderWidth / (duration * 60); // 60fps 기준
    let pos = 0;
    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= sliderWidth) {
        pos = 0;
      }
      slider.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }
    slider.style.transition = "none";
    animate();
  }

  // 이미지가 모두 로드된 후에만 시작
  let loaded = 0;
  images.forEach(img => {
    if (img.complete) loaded++;
    else img.onload = () => {
      loaded++;
      if (loaded === images.length) startInfiniteSlider();
    };
  });
  if (loaded === images.length) startInfiniteSlider();
});
  
// logo-slider 무한루프 슬라이더
(function () {
  const slider = document.querySelector('.logo-slider');
  if (!slider) return;

  // 1. 이미지 복제
  const images = Array.from(slider.children);
  images.forEach(img => {
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
  });

  function getSliderWidth(imgs) {
    let width = 0;
    imgs.forEach(img => {
      width += img.offsetWidth;
    });
    // gap 계산
    const style = getComputedStyle(slider);
    const gap = parseInt(style.gap || 0, 10);
    width += gap * (imgs.length - 1);
    return width;
  }

  function startInfiniteSlider() {
    const imgs = Array.from(slider.children).slice(0, images.length); // 원본만
    const sliderWidth = getSliderWidth(imgs);
    const duration = 30; // partner-slider와 동일하게 30초
    const speed = sliderWidth / (duration * 60); // 60fps 기준
    let pos = 0;
    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= sliderWidth) {
        pos = 0;
      }
      slider.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    }
    slider.style.transition = "none";
    animate();
  }

  // 이미지가 모두 로드된 후에만 시작
  let loaded = 0;
  images.forEach(img => {
    if (img.complete) loaded++;
    else img.onload = () => {
      loaded++;
      if (loaded === images.length) startInfiniteSlider();
    };
  });
  if (loaded === images.length) startInfiniteSlider();
})();
  
document.addEventListener('DOMContentLoaded', function() {
  // 순차 fade-up 애니메이션 (2,7번 섹션)
  const fadeUpGroups = [
    Array.from(document.querySelectorAll('.place-problem-item.fade-up')),
    Array.from(document.querySelectorAll('.adfreak-reason-item.fade-up'))
  ];
  fadeUpGroups.forEach(group => {
    if (group.length === 0) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          group.forEach((el, idx) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, idx * 150);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(group[0]);
  });

  // 개별 fade-up 애니메이션 (4~6섹션 이미지 등)
  const fadeUpSingles = Array.from(document.querySelectorAll('.fade-up')).filter(
    el => !el.classList.contains('place-problem-item') && !el.classList.contains('adfreak-reason-item')
  );
  const fadeUpSingleObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeUpSingleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  fadeUpSingles.forEach(item => fadeUpSingleObserver.observe(item));

  // FAQ 아코디언
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', function() {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // 모든 FAQ 닫기
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });
      // 클릭한 것만 열기
      if (!isOpen) item.classList.add('open');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const sliderWrap = document.querySelector('.contact-banner-slider');
  if (!sliderWrap) return; // contact.html이 아닐 때는 실행 안 함

  const slides = sliderWrap.querySelectorAll('.banner-slide');
  const dots = sliderWrap.querySelectorAll('.banner-dots .dot');
  if (!slides.length || !dots.length) return;

  let current = 0;
  let timer = null;

  function showSlide(idx) {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetTimer();
    });
  });

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
  }

  showSlide(0);
  resetTimer();
});

  // EmailJS 연동
  (function(){
    emailjs.init('mgXROKpth_F4zfpId'); // 본인 EmailJS Public Key 적용
  })();
  // contact-form 체크박스 값 포함 EmailJS 전송
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // 체크박스 값 모으기 함수
    const getCheckedValues = (name) =>
      Array.from(document.querySelectorAll(`input[name="${name}"]:checked`))
        .map(cb => cb.value)
        .join(', ');

    const services = getCheckedValues('service');
    const schedules = getCheckedValues('schedule');
    const budgets = getCheckedValues('budget');

    // 나머지 값
    const name = this.name.value;
    const phone = this.phone.value;
    const email = this.email.value;
    const product = this.product.value;
    const message = this.message.value;

    // EmailJS 전송 (새 템플릿 ID 사용)
    emailjs.send('service_7v7ydgc', 'template_hb4qghe', {
      name: name,
      phone: phone,
      email: email,
      product: product,
      message: message,
      services: services,
      schedules: schedules,
      budgets: budgets
    }, 'mgXROKpth_F4zfpId')
    .then(function(response) {
      alert('문의가 성공적으로 전송되었습니다!');
      contactForm.reset();
    }, function(error) {
      alert('전송에 실패했습니다.');
    });
  });
}
  
// 연락처 입력 자동 하이픈 처리
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let value = this.value.replace(/[^0-9]/g, ''); // 숫자만 남김
    if (value.length < 4) {
      this.value = value;
    } else if (value.length < 8) {
      this.value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length <= 11) {
      this.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    } else {
      this.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
  });
}
  