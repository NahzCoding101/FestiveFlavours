//function to show sidebar when the width of the screen is 400px or less

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
 }

//function to hide sidebar when the width of the screen is 800px or higher

 function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
 }