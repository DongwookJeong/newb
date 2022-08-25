const ho = {
  lecter : {
    name : "KDT",
    place : "305호",
    time : "9시",
  },
  tutor : {
    name : "가을",
    age : 18
  },
  study : ["html", "css", "js", "react"],
  fofo : {
    home : "대전",
      address : {
        
          name : "서구",
          dong : "둔산동",
          detail : {
            first : "오라클 빌딩",
            second : "그린학원",
            third : "305호"
          }
        
      }
    }
  }

const {
fofo : {
  home : {
    address : {
        detail : {
          third : cong
      }}}}} = ho;



// function change (){
//       if(ho.cong === "string"){
//         ho.cong = "306호";
//       }
//     }
//     console.log(iGotYou);


    // console.log(iGotYou);
  // console.log(third);
  // console.log(change);

// console.log(fofo.address.region.detail.third[i]);
// // ? 명령으로 배열접근
// ho.study[ho.study.length]="hacker";
// // ? 선언함(javascript)배열접근
// ho.study.push("cracker");
// // ? 리터럴로 작업하는 것은 어려울 것
// ho.study[5] = '저리가';

// console.table(ho);
// // ? 조회하는 행위만이 확인할 수 있다.
// // ? 브라우저가 없을 때는 찾기 어렵다.

// 자료구조에서 "객체"는 언제든지 접근할 수 있는 경로(PATH)를 제공해준다.
// ho.study[어쩌고]: 접근법, access : 접속

// ho라는 객체를 만들때
// "정적으로 값을 작성했다"
// ho라는 객체의 어느 값을 '동적'으로 '처리했다'
// ? 점표기법 : 다양하게 쓰는 방법