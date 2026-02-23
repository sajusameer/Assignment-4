let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount')
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')


function calculateCount() {
    total.innerText = allCardSection.children.length 
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()



// step 1;
function toggleStyle(id) {
    // adding white bg for all
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

    // adding  bg for current button
    selected.classList.remove('bg-white', 'text-gray-600')
    selected.classList.add('bg-blue-900', 'text-white')
    // step 1 finish

    // show and hidden particular section
    // step 4 start
    // filtering while clicking the filter button (All, Interview, Rejected)
    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderInterview()
    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden')
        renderRejected()
    }
}

// step 2 delegation
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.companyName').innerText
        const location = parenNode.querySelector('.location').innerText
        const type = parenNode.querySelector('.type').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Interview'

        const cardInfo = {
            companyName,
            location,
            type,
            salary,
            status: 'Interview',
            notes
        }

        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            interviewList.push(cardInfo)
        }

        // step 2 finish
        // removing the plant from rejected list
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

        // after remove rerender the html
        if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

         calculateCount()


    } else if (event.target.classList.contains('rejected-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const companyName = parenNode.querySelector('.companyName').innerText
        const location = parenNode.querySelector('.location').innerText
        const type = parenNode.querySelector('.type').innerText
        const salary = parenNode.querySelector('.salary').innerText
        const status = parenNode.querySelector('.status').innerText
        const notes = parenNode.querySelector('.notes').innerText

        parenNode.querySelector('.status').innerText = 'Rejected'

        const cardInfo = {
            companyName,
            location,
            type,
            salary,
            status: 'Rejected',
            notes
        }

        const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

        if (!jobExist) {
            rejectedList.push(cardInfo)
        }

        // removing the plant from interview list
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

        // console.log(interviewList);

        // after remove rerender the html
        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
        calculateCount()

    }

})

// step 3  html file create
function renderInterview() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''

    // crating innerHtml
    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = 'card flex flex-col md:flex-row md:justify-between shadow p-6 md:p-8 job-card gap-6'
        div.innerHTML = `
         <!-- main part 1 -->
                <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-2xl mb-2 font-semibold">${interview.companyName}</p>
                        <p class="positionName text-gray-700">React Native Developer</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2 text-gray-700">
                        <p class="location">Remote •</p>
                        <p class="type">Fulltime •</p>
                        <p class="salary"> $130,000 - $175,000</p>

                    </div>
                    <!-- part 3 -->
                     <p class="status w-[15%] bg-blue-100 py-2 px-4">${interview.status}</p>
                     <p class="notes text-gray-800">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                     <div class="flex gap-5">
                        <button class="interview-btn  border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300">INTERVIEW</button>
                        <button class="rejected-btn border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-300">REJECTED</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="delete-btn border rounded-full  text-grey-600 px-2 py-1 hover:bg-red-500 hover:text-white transition duration-300"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}

function renderRejected() {
    // make the filterSection empty every time
    filterSection.innerHTML = ''
    // crating innerHtml
    for (let rejected of rejectedList) {

        let div = document.createElement('div');
        div.className = 'card flex flex-col md:flex-row md:justify-between shadow p-6 md:p-8 job-card gap-6'
        div.innerHTML = `
         <!-- main part 1 -->
                <div class="space-y-6">
                    <!-- part 1 -->
                    <div>
                        <p class="companyName text-2xl mb-2 font-semibold">${rejected.companyName}</p>
                        <p class="positionName text-gray-700">React Native Developer</p>
                    </div>

                    <!-- part 2 -->
                    <div class="flex gap-2 text-gray-700">
                        <p class="location">Remote •</p>
                        <p class="type">Fulltime •</p>
                        <p class="salary"> $130,000 - $175,000</p>

                    </div>
                    <!-- part 3 -->
                     <p class="status w-[15%] bg-blue-100 py-2 px-4">${rejected.status}</p>
                     <p class="notes text-gray-800">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>

                     <div class="flex gap-5">
                        <button class="interview-btn  border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300">INTERVIEW</button>
                        <button class="rejected-btn border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-300">REJECTED</button>
                     </div>
                </div>

                <!-- main part 2 -->
                <div>
                    <button class="delete-btn border rounded-full  text-grey-600 px-2 py-1 hover:bg-red-500 hover:text-white transition duration-300"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div)
    }
}









// empty image

function checkEmptyState() {
  const cards = document.querySelectorAll(".job-card");

  const emptyState = document.getElementById("emptyState");
  const allCards = document.getElementById("allCards");

  if (cards.length === 0) {
    emptyState.classList.remove("hidden");
    allCards.classList.add("hidden");
  } else {
    emptyState.classList.add("hidden");
    allCards.classList.remove("hidden");
  }
}



// working only total

// delete-btn
// its working
// 
const allCards = document.getElementById("allCards");

allCards.addEventListener("click", function (event) {

    if (event.target.closest(".delete-btn")) {

        const card = event.target.closest(".job-card");
        card.remove();
        alert("Are you sure?")

        const companyName = card.querySelector(".companyName").innerText;

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);
        

        calculateCount();
        checkEmptyState();
    }

});






// const allCards = document.getElementById("mainContainer");

// allCards.addEventListener("click", function (event) {

//     if (event.target.closest(".delete-btn")) {

//         const card = event.target.closest(".job-card");
//         card.remove();
//         alert("Are you sure?")

//         const companyName = card.querySelector(".companyName").innerText;

//         interviewList = interviewList.filter(item => item.companyName !== companyName);
//         rejectedList = rejectedList.filter(item => item.companyName !== companyName);
//         jobList = jobList.filter(item == item.companyName !== companyName);
        

//         calculateCount();
//         checkEmptyState();
//     }

// });