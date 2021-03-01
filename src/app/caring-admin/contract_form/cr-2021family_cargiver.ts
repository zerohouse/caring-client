import {
    AlignmentType,
    Document,
    Paragraph,
    TextRun,
} from "docx";

function pay(pay: string): string{

    if (pay === "60"){
        return '21,200원'
    } else {
        return '28,400원'
    }

}  //근로 종료년도 기록 함수

function paydetail(pay: string): string{

    if (pay === "60"){
        return '① 임금은 기본급(시간 당 8,720원), 차량유지비, 법정수당(주휴수당(시간 당 1,744원), 연차수당(미사용 연차에 대해 시간 당 503원), 기타수당 및 식대(시간 당 10,233원))등으로 구성함.\n'
    } else {
        return '① 임금은 기본급(90분 당 13,080원), 차량유지비, 법정수당(주휴수당(90분 당 2,616원), 연차수당(미사용 연차에 대해 90분 당 755원), 기타수당 및 식대(90분 당 11,949원))등으로 구성함.\n'
    }

}  //근로 종료년도 기록 함수
function e_year(start_year:string, start_month:string, start_day:string): string{
    let end_year: number = Number(start_year) + 1;
    let month: number = Number(start_month);
    let day: number = Number(start_day);

    if (month===1 && day===1){
        end_year -= 1;
    }

    return `${end_year}`;
}  //근로 종료년도 기록 함수

function e_month(start_month:string, start_day:string): string{
    let end_month: number = Number(start_month);
    let day: number = Number(start_day);

    if (day===1){
        if (end_month===1){
            end_month=12;
        } else {
            end_month -= 1;
        }
    }
    if (end_month<10){
        return `0${end_month}`
    }

    return `${end_month}`
}  //근로 종료달 기록 함수

function e_day(start_year:string, start_month:string, start_day:string): string{
    let year: number = Number(start_year) + 1;
    let month: number = Number(start_month);
    let end_day: number = Number(start_day);

    if (end_day===1){
        if (month===5 || month===7 || month===10 || month===12){
            end_day=30;
        } else if (month===3){
            if (year%4===0 && year%100!=0){
                end_day=29;
            } else {
                end_day=28;
            }
        } else {
            end_day=31;
        }
    } else {
        end_day-=1;
    }
    if (end_day<10){
        return `0${end_day}`;
    }

    return `${end_day}`;
}  //근로 종료일 기록 함수


const phoneReplace = /-/g;

export const phoneNumberFormat = (value: string) => {
    const phoneNumber = value.toString().replace(phoneReplace, '');
    let format: string = '';

    if(phoneNumber.length === 10 && phoneNumber.slice(0,2) === "02") {
        format = `${phoneNumber.slice(0, 2)}-${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 10) {
        format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 11) {
        format = `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
    }
    return format;
};

export class doc2021FamilyGiver {

    public create2021FamilyCaregiver(name: string, center: string, time: string, address: string, place: string, phone: string, start: string, contract: string): Document {

        const document = new Document();

        const caregiver = {
            name : name,
            center : center,
            time: time,
            payments: "05",
            address: address,
            phone: phone,

            startDate: {
                year: start.slice(0, 4),
                month: start.slice(5, 7),
                day: start.slice(8, 10),
            },
            contract: {
                year: contract.slice(0, 4),
                month: contract.slice(5, 7),
                day: contract.slice(8, 10),
            },

        };  //요양보호사 계약서에서 사용되는 변수

        document.addSection({
            children: [
                this.createTitle(caregiver),
                this.createContactInfo(caregiver),
                this.createFirst(caregiver),
                this.createIntern(),
                this.createSecond(),
                this.createReason(),
                this.createTitletext("3. 근로조건"),
                this.createPlace(place),
                this.createText("   - 근로일 및 근로시간 : 1일 8시간 / 1주 40시간 범위 내 단시간 근로 (급여제공계획서에 의함)"),
                this.createText("   매주 일 (또는 매일단위) 근무, 주휴일 매주 요일"),
                this.createBsinfo(caregiver),
                this.createText("               (구체적인 업무내용은 노인장기요양보험법 및 운영규정에 따름."),
                this.createText("   - 근무상황에 따라 소정근로시간이 변경될 수 있음."),
                this.createText("   - 휴게시간 (근로시간 미포함) : 근로시간 4시간 이상 -> 30분, 8시간 이상 -> 1시간"),
                this.createText("   - 근로시간의 연장 : 업무상 필요한 경우 합의하에 1일 근로시간을 연장할 수 있음."),
                this.createText("   - 공단RFID 측정시간과 서비스제공계획서에 의한 시간이 다를 경우, 공단에서 인정된 시간 (월한도액)에"),
                this.createText("       한하여 근무시간으로 인정함."),
                this.createtimepay(caregiver),
                this.createtimepaydetail(caregiver),
                this.createText(`- ${caregiver.time}분 가족요양은 1일 ${caregiver.time}분까지 ${caregiver.time}분 급을 기준으로 지급하며, 추가할 금액을 기타수당 등으로 보전할 수 있음.`),
                this.createPayments(caregiver),
                this.createText("③ 지급방법 : “근로자”에게 직접 지급하거나 “근로자” 명의의 은행통장에 입금함. (근로자가 지정한 계좌로 지급가능)"),
                this.createText("④ “기관”은 “근로자”가 관련법령의 조건을 충족하는 경우 사회보험가입의무를 준수하며, 사회보험료는 법령이 정한 바에 따라 “기관”과 “근로자”가 각각 부담하여 납부함."),
                this.createTitletext("5. 휴일 및 휴가"),
                this.createText("① 휴일 : 주휴일은 매주 1일 부여 (특정하지 않으며 사정에 따라 지정·변경가능/ 전 주간 만근시 유급인정)"),
                this.createText("② 연차휴가 : 연차휴가의 발생 및 사용은 근로기준법에 따름."),
                this.createTextunderline("- 근로기준법 제62조에 의거 근로자대표와의 서면합의에 따라 유급휴일 이외의 주 중의 공휴일 (관공서의 공휴일에 관한 규정)로 대체할 수 있음."),
                this.createTitletext("6. 퇴직금 적용"),
                this.createText("퇴직금은 계속근로연수 1년에 대한 30일분의 퇴직금(마지막 근로일 기점의 평균임금기준)을 지급함."),
                this.createTitleseven(),
                this.createText("▪ 주휴일(주휴수당), 연차휴가, 퇴직금 _ 적용제외함."),
                this.createTitletext("8. 손해배상"),
                this.createText("① “근로자”는 “기관”의 정보 및 “수급자”의 정보를 제3자에게 제공하거나 누설해서는 안되며, 이로 인해 “기관”에 금전적, 정신적 손해가 발생할 경우 손해액 전액을 배상하고 민·형사상의 책임을 지는 것으로 함."),
                this.createText("② “근로자”는 본인의 행위로 인하여 “수급자” 또는 “기관”에 손해가 발생한 경우 손해액 전액을 배상하고 민·형사상의 책임을 지는 것으로 함."),
                this.createText(""),
                this.createTitletext("9. 고충처리 및 불공정 행위 금지 "),
                this.createText("① “기관”은 “근로자”와 “수급자” 간의 분쟁과 고충 해결에 대한 절차와 규정을 마련함."),
                this.createText("② “기관”은 “근로자”에게 본인부담금 면제, 수급자 이관 등의 불공정행위를 강요하거나 유도하지 않으며, 이를 어길 시 “근로자”는 거절할 권리가 있음 "),
                this.createText(""),
                this.createTitletext("10. 기 타"),
                this.createText("이 계약에 정함이 없는 사항은 취업규칙, 운영규정, 근로기준법 및 노동관계법에 의함. "),
                this.createText(""),
                this.createToday(caregiver),
                this.createText(`(기 관) 기 관 명 : 케어링 ${caregiver.center}센터                                                    대 표 자 : 김태성 (서명 / 인)`),
                this.createAddress(caregiver),
                this.createPhone(caregiver),
                this.createText(""),
                this.createAgreetitle("개인정보취급에 관한 동의"),
                this.createAgreetext(""),
                this.createAgreetext(" 근로자 본인은 수급자에 대한 급여제공의 실시 및 기관의 인사관리를 위하여 다음의 개인정보를 제공 (제3자에게 제공포함)하고 활용하는 것에 동의함."),
                this.createAgreetext(""),
                this.createAgreeindex(" 1. 정보수집항목"),
                this.createAgreetext("   - 기본정보(성명, 주민번호, 연락처, 주소) / 개인이력 / 질병관련이력"),
                this.createAgreetext("   - 기타 이용계획 수립과 관련한 정보 등"),
                this.createAgreetext("   - 요양보호사 자격증관련 정보"),
                this.createAgreeindex(" 2. 수집정보이용"),
                this.createAgreetext("   - 노인장기요양보험 서비스 사업 운영주체 등에 대한 자료제출"),
                this.createAgreetext("   - 배상책임보험 / 4대보험 / 세무신고 등에 활용"),
                this.createAgreeindex(" 3. 보유·이용기간"),
                this.createAgreetext("   - 수집정보로 생성된 서류 및 관련정보는 노인장기요양보험법에 명기된 보존기한(최대 5년)을 따름."),
                this.createAgreetext(""),
                this.createAgreename(caregiver),
                this.createAgreelast(),
                this.createText(""),
                this.createText(""),
                this.createPayAgreeFirst(),
                this.createPayAgreetitle("가족요양 급여 공제 동의서"),
                this.createAgreetext(""),
                this.createPayAgreetext("매월 분 급여에서 본인부담금을 공제 후 급여를 지급받습니다."),
                this.createAgreetext(""),
                this.createAgreename(caregiver),
                this.createAgreelast(),
            ],
        });

        return document;
    }  //요양보호사 계약서_본문

    public createTitle(caregiver: any): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
            children: [
                new TextRun({
                    text: `요양보호사 근로계약서 (단시간 근로자 _ ${caregiver.time}분)`,
                    bold: true,
                    size: 25,
                }),
            ],
        });
    }  //요양보호사 계약서 제목 함수

    public createContactInfo(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `케어링${caregiver.center}센터`,
                    bold: true,
                    underline: {},
                }),
                new TextRun(` (이하"기관")과(와)`),
                new TextRun({
                    text: `${caregiver.name}님 이하`,
                    bold: true,
                    underline: {},
                }),
                new TextRun(` ("근로자")은(는) 다음과 같이 근로계약을 체결한다.`),
            ],
        });
    }   //요양보호사 계약서 센터작성 함수

    public createFirst(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `1. 근로계약기간 : `,
                    bold: true,
                }),
                new TextRun({
                    text: `${caregiver.startDate.year}년 ${caregiver.startDate.month}월 ${caregiver.startDate.day}일부터 ${e_year(caregiver.startDate.year, caregiver.startDate.month, caregiver.startDate.day)}년 ${e_month(caregiver.startDate.month, caregiver.startDate.day)}월 ${e_day(caregiver.startDate.year, caregiver.startDate.month, caregiver.startDate.day)}일까지\n`,
                }),
            ],
        });
    }   //요양보호사 계약서 근로계약일작성 함수

    public createIntern(): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: `수습기간 : `,
                    bold: true,
                }),
                new TextRun({
                    text: `   년  월  일부터     년  월  일까지 `,
                }),
                new TextRun({
                    text: `[수습종료시 자동계약만료처리]`,
                    bold: true,
                }),

            ],
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }   //요양보호사 계약서 수습기간작성 함수

    public createSecond(): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `2. 계약기간만료사유 (자동) : `,
                    bold: true,
                }),
                new TextRun({
                    text: `재가장기요양제도의 특성상 아래의 경우 `,
                }),
                new TextRun({
                    text: `근로 계약만료로 당연종결사유`,
                    underline: {},
                }),
                new TextRun({
                    text: `로 함.`,
                }),
            ],
        });
    }  //요양보호사 계약서 계약기간만료사유작성 함수

    public createReason(): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: `* 수급자의 상실 (사망 / 입소 / 등급외)\t\t\t\t\t\t\t\t     * 수급자 또는 수급자보호자의 교체요구 / 수습종료\t\t\t\t\t\t\t     * 근로계약기간만료 : 쌍방의 합의하에만 갱신가능`,
                    bold: true,
                    size: 16,
                }),
            ],
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }   //요양보호사 계약서 계약기간만료사유작성 함수

    public createTitletext(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    bold: true,
                    size: 18,
                }),
            ],
        });
    }  //글자크기: 9 굵기:bold

    public createTitleseven(): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: "7. 적용제외 ",
                    bold: true,
                    size: 18,
                }),
                new TextRun({
                    text: "[",
                    size: 18,
                }),
                new TextRun({
                    text: "4주간 평균하여 1주 동안의 소정근로시간 주15시간 미만인 경우",
                    underline: {},
                    size: 18,
                }),
                new TextRun({
                    text: "]",
                    size: 18,
                }),
            ],
        });
    }   //요양보호사 계약서 7번 적용제외 작성 함수

    public createPlace(place: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `   - 근무장소 :`,
                    size: 18,
                }),
                new TextRun({
                    text: ` ${place}어르신댁`,
                    underline: {},
                    size: 18,
                }),
            ],
        });
    }  //글자크기: 9 텍스트밑줄

    public createtimepay(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `4. 임 금 (${caregiver.time}분 급 : ${pay(caregiver.time)})`,
                    size: 18,
                    bold: true,
                }),
            ],
        });
    }  //임금 지급

    public createtimepaydetail(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `${paydetail(caregiver.time)}`,
                    size: 18,
                    bold: true,
                }),
            ],
        });
    }  //임금 지급

    public createText(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 18,
                }),
            ],
        });
    }   //글자크기: 9

    public createTextunderline(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    underline: {},
                    size: 18,
                }),
            ],
        });
    }  //글자크기: 9 텍스트밑줄

    public createBsinfo(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: "   - 업무내용 : ",
                    size: 18,
                }),
                new TextRun({
                    text: "■",
                    size: 30,
                }),
                new TextRun({
                    text: " 1일 ",
                    size: 18,
                }),
                new TextRun({
                    text: "□",
                    size: 30,
                }),
                new TextRun({
                    text: " 1주 (",
                    size: 18,
                }),
                new TextRun({
                    text: "■",
                    size: 30,
                }),
                new TextRun({
                    text: "방문요양 1일",
                    size: 18,
                }),
                new TextRun({
                    text: caregiver.time,
                    size: 18,
                    underline: {},
                }),
                new TextRun({
                    text: "분, ",
                    size: 18,
                }),
                new TextRun({
                    text: "□",
                    size: 30,
                }),
                new TextRun({
                    text: " 방문목욕 1회_분, ",
                    size: 18,
                }),
                new TextRun({
                    text: "□",
                    size: 30,
                }),
                new TextRun({
                    text: " 방문간호_분)",
                    size: 18,
                }),
            ],
        });
    }   //요양보호사 계약서 3번의 업무내용작성

    public createPayments(caregiver: any): Paragraph{
        return new Paragraph({
            children: [
                new TextRun({
                    text: "② 임금지급일 : ",
                    size: 18,
                }),
                new TextRun({
                    text: "익월 ",
                    bold: true,
                    size: 18,
                }),
                new TextRun({
                    text: `${caregiver.payments} 일`,
                    bold: true,
                    underline: {},
                    size: 18,
                }),
                new TextRun({
                    text: " (휴일의 경우는 전일 지급)",
                    size: 18,
                }),
            ],
        });
    }   //요양보호사 계약서 4번 임금지급일 작성

    public createToday(caregiver: any): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: `${caregiver.contract.year}  년   ${caregiver.contract.month}월   ${caregiver.contract.day}일`,
                }),
            ],
        });
    }   //요양보호사 계약서 계약날짜 작성

    public createAddress(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `(근로자) 주 소 : ${caregiver.address}`,
                }),
            ],
        });
    }  //요양보호사 계약서 근로자 주소 작성

    public createPhone(caregiver: any): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: `\t연 락 처 : ${phoneNumberFormat(caregiver.phone)} / 성명 :  ${caregiver.name} (서명 / 인)`,
                }),
            ],
        });
    }   //요양보호사 계약서 연락처, 성명, 서명 작성

    public createAgreetitle(text: string): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: text,
                    bold: true,
                }),
            ],
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }   //요양보호사계약서 개인정보취급 동의 제목 작성

    public createAgreetext(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }   //요양보호사계약서 개인정보취급 본문 작성

    public createAgreeindex(text: string): Paragraph {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    bold: true,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 개인정보취급 굵기: bold 작성

    public createAgreename(caregiver: any): Paragraph {
        return new Paragraph({
            alignment: AlignmentType.RIGHT,
            children: [
                new TextRun({
                    text: `근로자 : `,
                }),
                new TextRun({
                    text: `         ${caregiver.name}    (서명)`,
                    underline: {},
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 개인정보취급 서명란 작성

    public createAgreelast(): Paragraph {
        return new Paragraph({
            border: {
                bottom: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 개인정보취급 border

    public createPayAgreeFirst(): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            border: {
                top: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    }  //요양보호사계약서 가족요양 급여공제동의서 border

    public createPayAgreetitle(text: string): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children:[
                new TextRun({
                    text: text,
                    bold: true,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    } //요양보호사계약서 가족요양 급여공제동의서 제목

    public createPayAgreetext(text: string): Paragraph{
        return new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
                new TextRun({
                    text: text,
                }),
            ],
            border: {
                left: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
                right: {
                    color: "auto",
                    space: 0,
                    value: "single",
                    size: 10,
                },
            },
        });
    } //요양보호사계약서 가족요양 급여공제동의서 본문

}  //docx파일 생성
