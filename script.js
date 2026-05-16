Vs code JavaScript 


// 1. MANAGE SIDEBAR ICON SWITCHING  
const activityIcons = document.querySelectorAll('.activity-bar .icon');  
const sidebarPanels = document.querySelectorAll('.sidebar-panel');  
  
activityIcons.forEach(icon => {  
    icon.addEventListener('click', () => {  
        activityIcons.forEach(i => i.classList.remove('active'));  
        icon.classList.add('active');  
  
        sidebarPanels.forEach(panel => panel.classList.remove('active'));  
        const target = icon.getAttribute('data-target');  
        if(target) {  
            document.getElementById(target).classList.add('active');  
        }  
    });  
});  
  
// 2. SIMULATE FILE TABS AND CONTENT CHANGING  
const fileContents = {  
    html: `<!DOCTYPE html>\n<html>\n  <head><title>VS Code Clone</title></head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`,  
    css: `body {\n  margin: 0;\n  background-color: #1e1e1e;\n  color: white;\n}\n\nh1 {\n  color: #007acc;\n}`  
};  
  
function switchTab(fileType) {  
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));  
    document.querySelectorAll('.file-item').forEach(item => item.classList.remove('active'));  
  
    if(fileType === 'html') {  
        document.getElementById('tab-html').classList.add('active');  
        document.querySelector('[data-file="html"]').classList.add('active');  
        document.getElementById('language-mode').innerText = 'HTML';  
    } else if(fileType === 'css') {  
        document.getElementById('tab-css').classList.add('active');  
        document.querySelector('[data-file="css"]').classList.add('active');  
        document.getElementById('language-mode').innerText = 'CSS';  
    }  
  
    document.getElementById('code-editor').innerText = fileContents[fileType];  
}  
  
document.querySelectorAll('.file-item').forEach(item => {  
    item.addEventListener('click', () => {  
        const file = item.getAttribute('data-file');  
        switchTab(file);  
    });  
});  
