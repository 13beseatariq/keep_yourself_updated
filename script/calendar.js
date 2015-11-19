
function setToday() 
{
	var now   = new Date();
	var day   = now.getDate();
	var month = now.getMonth();
	var year  = now.getYear();
	if (year < 2000)    // Y2K Fix, Isaac Powell
	year = year + 1900; // http://onyx.idbsu.edu/~ipowell
	this.focusDay = day;
	document.calControl.month.selectedIndex = month;
	document.calControl.year.value = year;
	displayCalendar(month, year);
}

function isFourDigitYear(year) 
{
	if (year.length != 4) {
	alert ("Sorry, the year must be four-digits in length.");
	document.calControl.year.select();
	document.calControl.year.focus();
	} 
	else 
	{ return true; }
}

function selectDate() 
{
	var year  = document.calControl.year.value;
	if (isFourDigitYear(year)) 
	{
		var day   = 0;
		var month = document.calControl.month.selectedIndex;
		displayCalendar(month, year);
	}
}

function setPreviousYear() 
{
	var year  = document.calControl.year.value;
	if (isFourDigitYear(year)) 
	{
		var day   = 0;
		var month = document.calControl.month.selectedIndex;
		year--;
		document.calControl.year.value = year;
		displayCalendar(month, year);
   }
}

function setPreviousMonth() 
{
	var year  = document.calControl.year.value;
	if (isFourDigitYear(year)) 
	{
		var day   = 0;
		var month = document.calControl.month.selectedIndex;
		if (month == 0) 
		{
			month = 11;
			if (year > 1000) 
			{
				year--;
				document.calControl.year.value = year;
			}
		} 
		else 
		{ 
			month--; 
		}
		document.calControl.month.selectedIndex = month;
		displayCalendar(month, year);
	}
}

function setNextMonth() 
{
var year  = document.calControl.year.value;
if (isFourDigitYear(year)) 
{
var day   = 0;
var month = document.calControl.month.selectedIndex;
if (month == 11)
{
month = 0;
year++;
document.calControl.year.value = year;
} 
else { month++; }
document.calControl.month.selectedIndex = month;
displayCalendar(month, year);
   }
}

function setNextYear()
{
var year = document.calControl.year.value;
if (isFourDigitYear(year)) {
var day = 0;
var month = document.calControl.month.selectedIndex;
year++;
document.calControl.year.value = year;
displayCalendar(month, year);
   }
}

function displayCalendar (month, year)
{

	var table = document.getElementById("table_cal");
	table.innerHTML = " ";
	var tr = document.createElement("tr");
	var td1 = document.createElement("th");
	var td2 = document.createElement("th");
	var td3 = document.createElement("th");
	var td4 = document.createElement("th");
	var td5 = document.createElement("th");
	var td6 = document.createElement("th");
	var td7 = document.createElement("th");
	td1.appendChild(document.createTextNode("Sunday"));
	td2.appendChild(document.createTextNode("Monday"));
	td3.appendChild(document.createTextNode("Tuesday"));
	td4.appendChild(document.createTextNode("Wednesday"));
	td5.appendChild(document.createTextNode("Thursday"));
	td6.appendChild(document.createTextNode("Friday"));
	td7.appendChild(document.createTextNode("Saturday"));
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tr.appendChild(td7);
	table.appendChild(tr);

	month = parseInt(month);
	year = parseInt(year);
	var days = getDaysInMonth(month+1,year)+1;
	var firstOfMonth = new Date (year, month, 1);
	var startingPos = firstOfMonth.getDay();
	var counter =1;
	var date = new Date();
	var d = date.getDate();
	var tr = document.createElement("tr");
	for (var k=0; k<startingPos;k++)
	{
		var td = document.createElement("td");	
		td.appendChild(document.createTextNode(" "));
		tr.appendChild(td);
	}
	for (var k=startingPos; k<7;k++)
	{
		var td = document.createElement("td");	
		td.appendChild(document.createTextNode(""+counter));
		tr.appendChild(td);
						td.className='oper';
		if (counter==d)
		{
			td.setAttribute("style", "color:'red'");
		}
		
		counter++;
	}
	table.appendChild(tr);	
	
	for (var i=0; i<4; i++)
	{
		var tr = document.createElement("tr");	
		for (var j=0; j<7; j++)
		{
			if (counter<days)
			{
				var td = document.createElement("td");	
				td.appendChild(document.createTextNode(""+counter));
				tr.appendChild(td);
				td.className='oper';
				if (counter==d)
				{
					td.style.color='red';
					td.style.fontWeight='bold';

				}
				counter++;
			}
		}//inner for loop ends here
		table.appendChild(tr);
	}//main for loop ends here
	
	
	
	function getDaysInMonth(month,year)  
	{
		var days;
		if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)  days=31;
		else if (month==4 || month==6 || month==9 || month==11) days=30;
		else if (month==2)  {
		if (isLeapYear(year)) { days=29; }
		else { days=28; }
		}
		return (days);
		}
		function isLeapYear (Year) {
		if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
		return (true);
		} else { return (false); 
	}	
	}
}
