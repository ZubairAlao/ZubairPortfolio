// changing selection 
const navs =  document.querySelectorAll('.nav');
const sections =  document.querySelectorAll('.sections');


navs.forEach(nav => {
    nav.addEventListener('click', function() {
        const target = nav.dataset.target;

        // deactivate all navs
        navs.forEach(nav => nav.classList.remove('active'));

        // activate clicked nav
        nav.classList.add('active');

        // hide all sections in main-content
        sections.forEach(section => section.classList.remove('active'));

        // show target section
        document.getElementById(target).classList.add('active');
    });
});

// menu toggle
const menuButton=  document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const hideNavs = document.querySelectorAll('.nav');

function menuToggle() {
    if (navLinks.classList.contains('menu-toggle')) {
      navLinks.classList.remove('menu-toggle');
      menuButton.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
    } else {
      navLinks.classList.add('menu-toggle');
      menuButton.innerHTML = '<i class="fas fa-times fa-2x"></i>';
    }
  }

  menuButton.addEventListener('click', menuToggle);


  // hidding navlinks after clicking nav
  function hideNavOnSmallScreen() {
    navLinks.classList.remove('menu-toggle');
    menuButton.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
  }
  
  hideNavs.forEach(nav => {
    nav.addEventListener('click', hideNavOnSmallScreen);
  });
  
  // const navLinksList = document.querySelectorAll('.nav');
  
  // navLinksList.forEach(navLink => {
  //   navLink.addEventListener('click', hideNavOnSmallScreen);
  // });


  // portfolio mouse over
  const portfolios = document.querySelectorAll('.portfolios');
  const portfolioIcons = document.querySelectorAll('.portfolio-icons');


  portfolios.forEach(portfolio => {
  const portfolioIcons = portfolio.querySelectorAll('.portfolio-icons');

  portfolio.addEventListener('mouseover', function() {
    portfolioIcons.forEach(portfolioIcon => {
      portfolioIcon.style.display = "flex";
    }); 
  });

  portfolio.addEventListener('mouseout', function() {
    portfolioIcons.forEach(portfolioIcon => {
      portfolioIcon.style.display = "none";
    }); 
  });
});


// mouser over after bg color change

portfolios.forEach(portfolio => {
  portfolio.addEventListener('mouseover', function() {
    portfolio.classList.add('hovered');
  });

  portfolio.addEventListener('mouseout', function() {
    portfolio.classList.remove('hovered');
  });
});









