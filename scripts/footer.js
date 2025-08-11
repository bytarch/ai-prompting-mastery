// Wait for the DOM to be fully loaded before running the script
 document.addEventListener('DOMContentLoaded', () => {
     // Create the footer element
     const footer = document.createElement('footer');

     // Apply Netflix-style Tailwind CSS classes to the footer
     footer.className = 'bg-black border-t border-gray-800 mt-auto';

     // Set the inner HTML content for the footer with Netflix colors
     footer.innerHTML = `
         <a href="https://flow.bytarch.dpdns.org/" class="block text-gray-400 hover:text-red-600 transition-colors duration-200">
             <div class="container mx-auto px-4 py-6 flex items-center justify-center">
                 <span class="text-sm">Made with Flow powered by Bytarch</span>
             </div>
         </a>
     `;

     // Append the newly created footer to the body
     document.body.appendChild(footer);
 });