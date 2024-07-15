$(document).ready(function () {
   /*Home page Start*/
   $("#contactForm").on('submit', function (e) {
      e.preventDefault();
      if ($('#checkMe').is(':checked')) {
         var formData = new FormData(this);
         var formDataObject = {};
         formData.forEach(function (value, key) {
            formDataObject[key] = value;
         });
         var jsonData = JSON.stringify(formDataObject);
         console.log('Form data as JSON:', jsonData);
         $.ajax({
            type: "POST",
            url: 'https://getform.io/f/arolowkb', 
          //  url: 'https://getform.io/f/bolgmpqa',
            data: jsonData,
            contentType: 'application/json',
            headers: {
               "Accept": "application/json"
            },
            success: function (response) {
               alert('The form was submitted successfully.');
               console.log('Server response:', response);
               location.reload();
            },
            error: function (xhr, status, error) {
               alert('An error occurred! Please try again later.');
               console.log('Status: ' + status + ', Error: ' + error);
               location.reload();
            }
         });
      } else {
         alert('Please agree to the terms and conditions.');
      }
   });
   /*Home page End*/
   /*Serive Provide For you Start*/
   $('.hover-container').hover(
      function () {
         $(this).find('.web-development-card').css('opacity', '1');
      },
      function () {
         $(this).find('.web-development-card').css('opacity', '0');
      }
   );
   $('.hover-container').hover(
      function () {
         var webDevelopmentCard = $(this).find('.web-development-card');
         if (webDevelopmentCard.length === 0) {
            var imgSrc = $(this).find('img').attr('src');
            var webDevContent = `<div class="web-development-card">
                        <img src="Images/icon.png" alt="Web Development Icon">
                        <h3 class="mt-4 mb-2">WEB DEVELOPMENT</h3>
                        <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
                        <a href="https://www.fylehq.com" target="_blank" class="read-more-btn">READ MORE <img class="read-more" src="Images/arrow.png" alt="Arrow"></a>
                        </div>`;
            $(this).append(webDevContent);
            $(this).find('.web-development-card').css('opacity', '1');
         }
      },
      function () {
         $(this).find('.web-development-card').css('opacity', '0');
      }
   );
   $('#carouselExample').on('slide.bs.carousel', function (event) {
      var index = event.to;
      $('.custom-indicator').removeClass('active');
      $('.custom-indicator[data-bs-slide-to="' + index + '"]').addClass('active');
      $('.custom-indicator').each(function () {
         var isActive = $(this).hasClass('active');
         var imgSrc = isActive ? 'Images/Active-button.png' : 'Images/button.png';
         $(this).find('img').attr('src', imgSrc);
      });
   });
   $('.custom-indicator').each(function () {
      var isActive = $(this).hasClass('active');
      var imgSrc = isActive ? 'Images/Active-button.png' : 'Images/button.png';
      $(this).find('img').attr('src', imgSrc);
   });
   /*Serive Provide For you END*/
   /* OUR PROJECT START*/
   var defaultImage = $('.text-row.active').data('image');
   $('#projectImage').attr('src', defaultImage);
   $('.text-row').click(function () {
      $('.text-row').removeClass('active');
      $(this).addClass('active');
      var newImage = $(this).data('image');
      $('#projectImage').attr('src', newImage);
   });
   /* OUR PROJECT END*/

});
