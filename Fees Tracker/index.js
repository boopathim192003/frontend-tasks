let selectcourse=document.getElementById('selected-course');
let coursefees=document.getElementById('course-fees');
let finalfee=0;
var initialcoursefee=0;
function coursefee()
{
    initialcoursefee=Number(coursefees.value);
    coursefees.value=selectcourse.value;
}

function concessionFees()
{
    let radios=document.getElementsByName('inlineRadioOptions');
    let concessionFee=0;
    for (const radio of radios) {
        if(radio.checked)
        {
            concessionFee=Number(radio.value);
            break;
        }
    }
    document.getElementById('finalConcFee').value=concessionFee;
    calcFees();
}
function calcFees()
{
    let paidfees=Number(document.getElementById('TotalPaidFees').value);
    let concfee=Number(document.getElementById('finalConcFee').value);
    finalfee=initialcoursefee-(paidfees+concfee);
    document.getElementById('coursefees').value=finalfee;
}