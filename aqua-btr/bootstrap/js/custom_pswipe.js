// JavaScript Document
(function(window, PhotoSwipe){
      document.addEventListener('DOMContentLoaded', function(){
        var options = {
            getImageCaption: function(el){              
              var captionText, captionEl, sBar, eBar, fooBar;
              // Get the caption from the alt tag
              if (el.nodeName === "IMG"){
                captionText = el.getAttribute('alt'); sBar = childEl.getAttribute('s-bar');                              
                fooBar = childEl.getAttribute('foo-bar'); eBar = childEl.getAttribute('e-bar');  
              }
              var i, j, childEl;
              for (i=0, j=el.childNodes.length; i<j; i++){
                childEl = el.childNodes[i];
                if (el.childNodes[i].nodeName === 'IMG'){
                  captionText = childEl.getAttribute('alt'); sBar = childEl.getAttribute('s-bar');                              
                  fooBar = childEl.getAttribute('foo-bar'); eBar = childEl.getAttribute('e-bar');   
                }
              }
              // Return a DOM element with custom styling
              captionEl = document.createElement('div');
              captionEl.style.cssText = 'font-weight: bold; padding: 5px;';
              captionEl.appendChild(document.createTextNode(captionText));
              captionEl.appendChild(document.createElement('br'));                         
              captionEl.appendChild(document.createTextNode(sBar));                         
              captionEl.appendChild(document.createElement('br'));                         
              captionEl.appendChild(document.createTextNode(fooBar));                         
              captionEl.appendChild(document.createElement('br'));                         
              captionEl.appendChild(document.createTextNode(eBar));                          
              return captionEl;
            }
          },
          instance = PhotoSwipe.attach( window.document.querySelectorAll('#gallery a'), options );
      }, false);    
    }(window, window.Code.PhotoSwipe));