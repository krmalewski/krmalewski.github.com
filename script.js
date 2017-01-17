'use strict';
console.log('JS connected');

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width()
  $('.land').css('height', windowHeight);

  const header = $('.header');
  setTimeout(() => {
    header[0].classList.add('slideIn');
  }, 1000);

  const github = $('#github-logo');
  const email = $('#email-logo');
  const linkedIn = $('#linked-in');

  setTimeout(() => {
    email.addClass('animated2 fadeInUp');
  }, 1200);

  setTimeout(() => {
    github.addClass('animated2 fadeInUp');
  }, 1400);

  setTimeout(() => {
    linkedIn.addClass('animated2 fadeInUp');
  }, 1600);

  github.on('mouseenter', function() {
    github.css({
      'opacity': '0.6',
      'transform': 'none'
    });
    github.removeClass('animated2 fadeInUp');
    github.addClass('animated bounce');
  })

  github.on('mouseout', function() {
    github.removeClass('animated');
    github.removeClass('bounce')
  })

  email.on('mouseenter', function() {
    email.css({
      'opacity': '0.6',
      'transform': 'none'
    });
    email.removeClass('animated2 fadeInUp');
    email.addClass('animated rubberBand')
  })

  email.on('mouseout', function() {
    email.removeClass('animated');
    email.removeClass('rubberBand')
  })

  linkedIn.on('mouseenter', function() {
    linkedIn.css({
      'opacity': '0.6',
      'transform': 'none'
    });
    linkedIn.removeClass('animated2 fadeInUp');
    linkedIn.addClass('animated jello')
  })

  linkedIn.on('mouseout', function() {
    linkedIn.removeClass('animated');
    linkedIn.removeClass('jello')
  })

})

