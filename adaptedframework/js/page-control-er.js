var currentPageNumber = 0;
var previousPageNumber = -1;
var pageHistory = [];

$( document ).ready( appReady );
$( document ).ready( main );

function appReady()
{
	$.each( pageArray , function( ind , val )
	{
		try
		{
			if( $( '#' + val ).length == 0 )
			{
				alert( 'Something went wrong: you specified a page in your pageArray but the <div id="' + val + '"> does not exist.');
				return;
			}
			typeof window[ val ] == 'function' && window[ val ]( '#' + val );
		}
		catch( err )
		{
			alert( 'Something went wrong in the function ' + val + '(): ' + err + '.' );
			return;
		}
	});

	$.each( popUpArray , function( ind , val )
	{
		try
		{
			if( $( '#' + val ).length == 0 )
			{
				alert( 'Something went wrong: you specified a popUp in your popUpArray but the <div id="' + val + '"> does not exist.');
				return;
			}
			typeof window[ val ] == 'function' && window[ val ]( '#' + val );
		}
		catch( err )
		{
			alert( 'Something went wrong in the function ' + val + '(): ' + err + '.' );
			return;
		}
	});

	showPage();
    
    for (var a = 12; a > 0; a--) {
                $( '#' + pageArray[ a ] ).hide();
            }
    
    $('#whichservice').val("selectservice");
}

function main()
{
	//Display Page 1 (and no other pages at the same time)
    showPage ();
    
    for (var a = 12; a > 0; a--) {
                $( '#' + pageArray[ a ] ).hide();
            }
    
    
    //Navigation Handling
    $( '.menuButton' ).click( buttonClicked );
    
    $( '[data-role="navbutton"]' ).click( discardNavigation );
    
    $( ' .navbutton0' ).click( openPage0 );
    
    function openPage0( e )
    {
        changePage( 'p0' );
        $('.headerheading').text("HOME");
	}
    
    $( ' .navbutton1' ).click( openPage1 );
    
    function openPage1( e )
	{
		changePage( 'p1' );
        $('.headerheading').text("ABOUT");
	}
    
    $( ' .navbutton2' ).click( openPage2 );
    
    function openPage2( e )
	{
		changePage( 'p2' );
        $('.headerheading').text("YOUR MISSION");
	}

    $( ' .navbutton3' ).click( openPage3 );
    
    function openPage3( e )
	{
		changePage( 'p3' );
        $('.headerheading').text("THE RUHR AREA");
	}

    $( ' .navbutton4' ).click( openPage4 );
    
    function openPage4( e )
    {
		changePage( 'p4' );
        $('.headerheading').text("EVENTEERS");
	}

    $( ' .navbutton5' ).click( openPage5 );
    
    function openPage5( e )
	{
		changePage( 'p5' );
        $('.headerheading').text("TESTIMONIALS");
	}

    $( ' .navbutton6' ).click( openPage6 );
    
    function openPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}

    $( ' .navbutton7' ).click( openPage7 );
    
    function openPage7( e )
	{
		changePage( 'p7' );
        $('.headerheading').text("CONTACT");
	}
    
    
    //Page 5: Read more Testimonials
    $( ' .displaymorebutton' ).click( displaymore );
    
    
    
}


function showPage()
{
	$( '[data-role="popUp"]' ).removeClass( 'active' ).css( 'z-index' , 0 ).hide(currentPageNumber);
	$( '[data-role="page"]' ).removeClass( 'active' ).css( 'z-index' , 0 );
	$( '#' + pageArray[ currentPageNumber ] ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , incomingPageAnimationEnd );
	$( '#' + pageArray[ previousPageNumber ] ).on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , outgoingPageAnimationEnd );
	$( '#' + pageArray[ currentPageNumber ] ).show(currentPageNumber).addClass( 'active' ).css( 'z-index' , 1 );
}

function changePage( command )
{
	switch( command )
	{
		case 'p0':
            previousPageNumber = currentPageNumber; 
            for (var a = 12; a > 0; a--) {
                $( '#' + pageArray[ a ] ).hide();
            }
            currentPageNumber = 0; 
            discardNavigation ();
            showPage(); 
			break; 
            
        case 'p1':
            previousPageNumber = currentPageNumber;
            for (var b = 0; b < 1; b++) {
                $( '#' + pageArray[ b ] ).hide();
            }
            for (var c = 12; c > 1; c--) {
                $( '#' + pageArray[ c ] ).hide();
            }
            currentPageNumber = 1;
            discardNavigation ();
            showPage();
			break;
            
        case 'p2':
            previousPageNumber = currentPageNumber;
            for (var d = 0; d < 2; d++) {
                $( '#' + pageArray[ d ] ).hide();
            }
            for (var f = 12; f > 2; f--) {
                $( '#' + pageArray[ g ] ).hide();
            }
            currentPageNumber = 2;
            discardNavigation ();
            showPage();
			break;
            
        case 'p3':
            previousPageNumber = currentPageNumber;
            for (var g = 0; g < 3; g++) {
                $( '#' + pageArray[ g ] ).hide();
            }
            for (var h = 12; h > 3; h--) {
                $( '#' + pageArray[ h ] ).hide();
            }
            currentPageNumber = 3;
            discardNavigation ();
            showPage();
			break;
            
        case 'p4':
            previousPageNumber = currentPageNumber;
            for (var i = 0; i < 4; i++) {
                $( '#' + pageArray[ i ] ).hide();
            }
            for (var j = 11; j > 4; j--) {
                $( '#' + pageArray[ j ] ).hide();
            }
            currentPageNumber = 4;
            discardNavigation ();
            showPage();
			break;
            
        case 'p5':
            previousPageNumber = currentPageNumber;
            for (var k = 0; k < 5; k++) {
                $( '#' + pageArray[ k ] ).hide();
            }
            for (var l = 12; l > 5; l--) {
                $( '#' + pageArray[ l ] ).hide();
            }
            currentPageNumber = 5;
            discardNavigation ();
            showPage();
			break;
            
        case 'p6':
            previousPageNumber = currentPageNumber;
            for (var m = 0; m < 6; m++) {
                $( '#' + pageArray[ m ] ).hide();
            }
            for (var n = 12; n > 6; n--) {
                $( '#' + pageArray[ n ] ).hide();
            }
            currentPageNumber = 6;
            discardNavigation ();
            showPage();
			break;
            
        case 'p7':
            previousPageNumber = currentPageNumber;
            for (var o = 0; o < 7; o++) {
                $( '#' + pageArray[ o ] ).hide();
            }
            for (var p = 12; p > 7; p--) {
                $( '#' + pageArray[ p ] ).hide();
            }
            currentPageNumber = 7;
            discardNavigation ();
            showPage();
			break;
            
        case 'p8':
            previousPageNumber = currentPageNumber;
            for (var q = 0; q < 8; q++) {
                $( '#' + pageArray[ q ] ).hide();
            }
            for (var r = 12; r > 8; r--) {
                $( '#' + pageArray[ r ] ).hide();
            }
            currentPageNumber = 8;
            discardNavigation ();
            showPage();
			break;
            
        case 'p9':
            previousPageNumber = currentPageNumber;
            for (var s = 0; s < 9; s++) {
                $( '#' + pageArray[ s ] ).hide();
            }
            for (var t = 12; t > 9; t--) {
                $( '#' + pageArray[ t ] ).hide();
            }
            currentPageNumber = 9;
            discardNavigation ();
            showPage();
			break;
            
        case 'p10':
            previousPageNumber = currentPageNumber;
            for (var u = 0; u < 10; u++) {
                $( '#' + pageArray[ u ] ).hide();
            }
            for (var v = 12; v > 10; v--) {
                $( '#' + pageArray[ v ] ).hide();
            }
            currentPageNumber = 10;
            discardNavigation ();
            showPage();
			break;
            
        case 'p11':
            previousPageNumber = currentPageNumber;
            for (var w = 0; w < 11; w++) {
                $( '#' + pageArray[ w ] ).hide();
            }
            for (var x = 12; x > 11; x--) {
                $( '#' + pageArray[ x ] ).hide();
            }
            currentPageNumber = 11;
            discardNavigation ();
            showPage();
			break;
            
        case 'p12':
            previousPageNumber = currentPageNumber;
            for (var y = 0; y < 12; y++) {
                $( '#' + pageArray[ y ] ).hide();
            }            
            currentPageNumber = 12;
            discardNavigation ();
            showPage();
			break;
                     
    }
}

function incomingPageAnimationEnd( e )
{
	$( this ).off( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , incomingPageAnimationEnd );
	var pageId = $( this ).attr('id');
	var transitionEndFunctionName = pageId + 'Incoming';

	typeof window[ transitionEndFunctionName ] == 'function' && window[ transitionEndFunctionName ]( '#' + pageId );
}


function outgoingPageAnimationEnd( e )
{
	$( this ).hide(0);
	$( this ).off( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd' , outgoingPageAnimationEnd );
	var pageId = $( this ).attr('id');
	var transitionEndFunctionName = pageId + 'Outgoing';

	typeof window[ transitionEndFunctionName ] == 'function' && window[ transitionEndFunctionName ]( '#' + pageId );
}


//Navigation
function buttonClicked( e )
{
	$( '.navigation' ).toggleClass( 'visible' );
	$( '.menuButton' ).toggleClass( 'selected' );
}

function discardNavigation (e)
{
	$( '.navigation' ).removeClass( 'visible' );
    $( '.menuButton' ).removeClass( 'selected' );
}

//Page 5 Testimonials
function displaymore ( e )
{
	$( '.hiddenopinions' ).toggleClass( 'shown' );
	$( '.displaymorebutton' ).toggleClass( 'selected' );
    $( '.displaymorebutton' ).toggleClass( 'active' );
    $( '.displaymorebutton' ).toggleClass( 'hidden' );
}

//Page 6 Selecting Service
function show(aval) {
    if (aval == "expedition") {
    nlsignup.style.display='none';
    ersignup.style.display='block';
    Form.fileURL.focus();
    } else if (aval == "newsletter") {
    ersignup.style.display='none';
    nlsignup.style.display='block';
    Form.fileURL.focus();   
    }
    else {
    ersignup.style.display='none';
    nlsignup.style.display='none';
    }
  }

