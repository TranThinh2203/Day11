let student = {
  name: "Nguyen Van A",
  age: 20,
  gender: "male",
  scores: {
    math: 8,
    english: 7,
    science: 9
  }
};

console.log(`Tên sinh viên: ${student.name}`);
console.log(`Tuổi: ${student.age}`);

const calcAverage = (scores) => {
  const { math, english, science } = scores;
  return ((math + english + science) / 3).toFixed(2);
};

console.log("Điểm trung bình:", calcAverage(student.scores));

student.address = "Ha Noi";
console.log("Đã thêm địa chỉ:", student.address);

delete student.gender;
console.log("Sau khi xóa gender:", student);
