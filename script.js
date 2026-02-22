let interviewList = [];
let rejectedList = []
let currentStatus = 'all'

let total = document.getElementById('total');
let thrivingCount = document.getElementById('interviewCount')
let strugglingCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectFilterBtn = document.getElementById('rejected-filter-btn')














// step 1;
function toggleStyle(id) {
    // adding gray bg for all
    allFilterBtn.classList.add('bg-white', 'text-gray-600')
    interviewFilterBtn.classList.add('bg-white', 'text-gray-600')
    rejectFilterBtn.classList.add('bg-white', 'text-gray-600')

    // if any button has black then remove
    allFilterBtn.classList.remove('bg-blue-900', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-900', 'text-white')
    rejectFilterBtn.classList.remove('bg-blue-900', 'text-white')

    // console.log(id);
    const selected = document.getElementById(id)//this is the button that clicked for filter

    currentStatus = id
    console.log(currentStatus);
    // console.log(selected);

    // adding black bg for current button
    selected.classList.remove('bg-white', 'text-gray-600')
    selected.classList.add('bg-blue-900', 'text-white')
    // step 1 finish

    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, Thriving, Struggling)
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterviw()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
}