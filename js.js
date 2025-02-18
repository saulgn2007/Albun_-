function openTab(evt, mes) {

    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active-content'));

    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    document.getElementById(mes).classList.add('active-content');
    
    evt.currentTarget.classList.add('active-tab');
}