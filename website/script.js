// // Check if a 'visitorCount' exists in localStorage
// if (localStorage.getItem('visitorCount')) {
//     // Increment the visitor count
//     localStorage.setItem('visitorCount', parseInt(localStorage.getItem('visitorCount')) + 1);
// } else {
//     // If no count exists, set to 1 (initial visit)
//     localStorage.setItem('visitorCount', 1);
// }

// // Display the visitor count
// document.getElementById('visitorCount').innerText = localStorage.getItem('visitorCount');

// // GET API REQUEST
// async function get_visitors() {
//     // call post api request function
//     //await post_visitor();
//     try {
//         let response = await fetch('https://i2c9mq7v59.execute-api.us-east-1.amazonaws.com/default/VisitorCounter', {
//             method: 'GET',
//         });
//         let data = await response.json()
//         document.getElementById("visitors").innerHTML = data['count'];
//         console.log(data);
//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// }


// get_visitors();


// Replace this URL with the URL of your API Gateway endpoint
const apiEndpoint = 'https://2otiafn0t4.execute-api.ap-south-1.amazonaws.com/default/VisitorCounter';

async function updateVisitorCount() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        document.getElementById('visitor-count').innerText = data.count;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        document.getElementById('visitor-count').innerText = 'unavailable';
    }
}

updateVisitorCount();