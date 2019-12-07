
var arr = [];
var callbackTime_1;
var callbackTime_2;

function generate_array(len) {
    var arr = [];
    for(var i=0; i<len; i++) {
        arr.push(Math.floor(Math.random()*100)+1);
    }
    return arr;
}


function insert_div(arr) {

    var div, css_prop, i, len, width_val, wid;

    len = arr.length;
    wid = window.innerWidth;
    width_val = (Math.floor((wid-len*3-100)/len));

    for(i=0; i<len; i++) {

        div = document.createElement('div');

        css_prop = 'height: ' + arr[i]*5 + 'px; width: ' + width_val + 'px; background-color: #4CAF50; margin-left: 2px; float: left';

        div.style.cssText = css_prop;

        div.setAttribute("id", i);

        document.querySelector('.canvas').appendChild(div);
    }
}

document.querySelector('.slider').addEventListener('click', function() {
    var range_val, canvas;

    document.querySelector('body').style.backgroundColor = '#ddd';
    document.querySelector('footer').style.display = 'none';

    range_val = document.querySelector('.slider').value;

    canvas = document.querySelector('.canvas');
    canvas.innerHTML = '';

    arr = generate_array(range_val);

    //Setting the callbackTime_1 value
    if(range_val < 33) callbackTime_1 = 3000;
    else if(range_val < 66) callbackTime_1 = 6000;
    else callbackTime_1 = 900;

    insert_div(arr);

});


function init() {

    var sort_val, range_val;

    //changing height of heading so that the bar fits
    document.querySelector('.heading-primary a').style.fontSize = '20px';
    document.querySelector('.heading-primary').style.padding = '3px 30px';


    sort_val = document.querySelector('.choices').value;
    range_val = document.querySelector('.slider').value;

    console.log(sort_val, range_val);

    console.log(arr);

    document.querySelector('.menu').style.pointerEvents = 'none';

    init_sort(arr, sort_val);


}


//Sorting

function _helper_bubble_sort(arr, i, len) {

    var j = 0;
    var repeatHandle1;
    callbackTime_2 = Math.floor((0.9*callbackTime_1)/len);

    var handle_2 = window.setInterval(function() {

        if(j < len-i-1) {

            var prop1, prop2, div1, div2, temp;

            div1 = document.getElementById(j+'');
            div2 = document.getElementById((j+1)+'');
            div1.style.backgroundColor = '#b71540';
            div2.style.backgroundColor = '#b71540';
            //console.log('Color changed to Red');


            if(arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                //document.querySelector('.canvas').innerHTML = '';
                //insert_div(arr);

                window.setTimeout(function() {
                    prop1 = div1.getAttribute('style');
                    prop2 = div2.getAttribute('style');

                    div1.style = prop2;
                    div2.style = prop1;

                }, callbackTime_2/3);

            }

            repeatHandle1 = window.setTimeout(function() {
                div1.style.backgroundColor = '#4CAF50';
                div2.style.backgroundColor = '#4CAF50';
                //console.log('Color CHanged to green');
            }, callbackTime_2*2/3);

            j++;

        } else {
            var divLast, divSecondLast;

            //stoping the TimeOut function from making any changes
            window.clearTimeout(repeatHandle1);
            //console.log('repeatHandle1 stopped');

            //Changing second div color to original and last div color to fixed and sorted
            if(j-1 >= 0) {
                divSecondLast = document.getElementById(j-1 + '');
                divSecondLast.style.backgroundColor = '#4CAF50';
            }

            divLast = document.getElementById(j+'');
            divLast.style.backgroundColor = '#079992';

            window.clearInterval(handle_2);
        }

    }, callbackTime_2);

    console.log(i);

}

function bubble_sort(arr, len) {
    var i = 0;

    if(i < len-1) {
        _helper_bubble_sort(arr, i, len);
        i++;
    }

     var handle = window.setInterval(function() {

        if(i < len-1) {
            _helper_bubble_sort(arr, i, len);
            i++;
        } else {

            var divTemp;

            divTemp = document.getElementById(0+'');
            divTemp.style.backgroundColor = '#079992';

            window.clearInterval(handle);
        }

    }, callbackTime_1);

}


//Selection Sort

function _helper_selection_sort(arr, i, len) {

    var divMin;
    var j = i+1;
    var min = i;

    // divMin = document.getElementById(min + '');
    // divMin.style.backgroundColor = '#8e44ad';

    callbackTime_2 = Math.floor((0.9*callbackTime_1)/len);

    var handle_2 = window.setInterval(function() {

        if(j < len) {

            var div1, div2;

            div1 = document.getElementById(min + '');
            div2 = document.getElementById(j + '');
            div1.style.backgroundColor = '#8e44ad';
            div2.style.backgroundColor = '#b71540';


            if(arr[min] > arr[j]) {
                min = j;

                window.setTimeout(function() {
                    div2.style.backgroundColor = '#8e44ad';
                }, callbackTime_2/3);
            }

            if(min == j) {
                requestHandle2 = window.setTimeout(function() {
                    div1.style.backgroundColor = '#4CAF50';
                }, callbackTime_2*2/3);
            }else {
                requestHandle2 = window.setTimeout(function() {
                    div2.style.backgroundColor = '#4CAF50';
                }, callbackTime_2*2/3);
            }

            j++;

        } else {

            if(min != i) {

                //console.log('i : ' + i + 'min : ' + min);
                console.log('I am in Orogianl');

                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;

                var div1, div2, prop1, prop2, temp;

                div1 = document.getElementById(min + '');
                div2 = document.getElementById(i + '');

                div2.style.backgroundColor = '#8e44ad';

                prop1 = div1.getAttribute('style');
                prop2 = div2.getAttribute('style');

                div1.style = prop2;
                div2.style = prop1;

                window.setTimeout(function() {
                    div1.style.backgroundColor = '#4CAF50';
                    div2.style.backgroundColor = '#079992';
                }, callbackTime_2/3);


                // document.querySelector('.canvas').innerHTML = '';
                // insert_div(arr);
                console.log('Changed');

            } else {
                var div1;
                console.log('Hello I am else');
                div1 = document.getElementById(min + '');
                div1.style.backgroundColor = '#079992';
            }

            window.clearInterval(handle_2);
        }

    }, callbackTime_2);

    console.log(i);

}

function selection_sort(arr, len) {
    var i = 0;

    if(i < len-1) {
        _helper_selection_sort(arr, i, len);
        i++;
    }

    var handle = window.setInterval(function() {

        if(i < len-1) {

            _helper_selection_sort(arr, i, len);
            i++;

        } else {

            var divTemp;
            divTemp = document.getElementById(len-1 + '');
            divTemp.style.backgroundColor = '#079992';

            window.clearInterval(handle);
        }

    }, callbackTime_1);

}

//Insertion Sort

function _helper_insertion_sort(arr, i, len) {

    var j = i-1;
    var color_len = i;
    var key = arr[i];
    
    callbackTime_2 = Math.floor((callbackTime_1*0.9)/len);

    // var div1;
    // div1 = document.getElementById(j+'');
    // div1.style.backgroundColor = '#079992';

    console.log(`Hello I am in the beginning of the call and is ${i}`);
    

    var handle_2 = window.setInterval(function() {

        var div1, div2, prop1, prop2, temp;


        if(j >= 0) {
            div1 = document.getElementById(j+1 + '');
            div1.style.backgroundColor = '#b71540';
            prop1 = div1.getAttribute('style');
        }

        if(j >= 0 && arr[j] >key) {

            div2 = document.getElementById(j + '');
            div2.style.backgroundColor = '#F2BD96';
            prop2 = div2.getAttribute('style');

            temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;

            window.setTimeout(function() {
                div1.style = prop2;
                div2.style = prop1;
            }, callbackTime_2/3);

            // window.setTimeout(function() {
            //     div1.style.backgroundColor = '#FE6F27';
            // }, callbackTime_2*2/3);

            // document.querySelector('.canvas').innerHTML = '';
            // insert_div(arr);

            j--; 

        } else {

            var divTemp;
            // if(j >= 0 ) divTemp = document.getElementById(j + '');
            // else divTemp = document.getElementById(0 + '');
            // divTemp = document.getElementById(j+1 + '');
            // divTemp.style.backgroundColor = '#079992';

            while(color_len >= 0) {
                divTemp = document.getElementById(color_len + '');
                divTemp.style.backgroundColor = '#079992';
                color_len--;
            }

             console.log('End is Changed' + 'And the value of J is : ' + (j+1) + '\n');

            // stopping the invterval handle_2
            window.clearInterval(handle_2);
        }

    }, callbackTime_2*3);


    console.log(i);

}

function insertion_sort(arr, len) {
    var i = 0;

    var handle = window.setInterval(function() {

        if(i < len) {
            _helper_insertion_sort(arr, i, len);
            i++;
        } else {
            window.clearInterval(handle);
        }

    }, callbackTime_1*2);

}


function init_sort(arr, type) {

    var len;

    len = arr.length;

    if(type === 'bubble') {
        bubble_sort(arr, len);

        //for making division clickable again
        setTimeout(function() {
            document.querySelector('.menu').style.pointerEvents = 'auto';
        }, callbackTime_1*len);

    }else if(type === 'selection') {
        selection_sort(arr, len);

        setTimeout(function() {
            document.querySelector('.menu').style.pointerEvents = 'auto';
        }, callbackTime_1*len);

    }else if(type === 'insertion') {
        insertion_sort(arr, len);

        setTimeout(function() {
            document.querySelector('.menu').style.pointerEvents = 'auto';
        }, callbackTime_1*len);
    }

}