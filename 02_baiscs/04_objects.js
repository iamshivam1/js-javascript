// const tinder = new Object() // singleton object
// cost tinder_user = {}
// // console.log(tinder);

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shivam"
}

// course.courseInstructor
const {courseInstructor: teacher} = course
console.log(teacher);

// {
//     "name": "Raghav",
//     "cousename": "Javascript",
//     "price": "free"
// }