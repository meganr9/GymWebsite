console.log("Hello Membership page");

const memberships = [
    {name:"Trial Membership", photo:"../images/gripWeigth.jpg", textContent:"$1 dolla"},
    {name:"General Membership", photo:"../images/gripWeigth.jpg", textContent:"$2 dolla"},
    
    {name:"Advanced Membership", photo:"../images/gripWeigth.jpg", textContent:"$3 dolla"},
    {name:"Ultra Membership", photo:"../images/gripWeigth.jpg", textContent:"$4 dolla"}
];


function onMemberShipClick(num) {
    const div = document.querySelector("#hidden-"+num);
    div.textContent = memberships[num-1].textContent
    
const myImage = new Image(100, 200);
myImage.src = "../images/gripWeigth.jpg";
    div.appendChild(myImage)
}