 export default function HeaderDate(){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  function getDate(){
    const today = new Date();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month} ${date}, ${year}`;
 }
 return getDate()
}