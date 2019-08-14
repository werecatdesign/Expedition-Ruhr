//-------------------------------------------------------------Coming from pages---------------------------------------------------
//-------------------------------------------------------------From page0---------------------------------------------------

function page0( element )
{
    //------------------------------------------------From the page directly----------------------------------------------
	$( element + ' .page1Button' ).click( gotoPage1 );
    
    function gotoPage1( e )
	{
		changePage( 'p1' );
        $('.headerheading').text("ABOUT");
	}
    
    $( element + ' .page2Button' ).click( gotoPage2 );
    
    function gotoPage2( e )
	{
        
		changePage( 'p2' );
        $('.headerheading').text("YOUR MISSION");
	}
    
    $( element + ' .page6Button' ).click( gotoPage6 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
}


//-------------------------------------------------------------From page1---------------------------------------------------

function page1( element )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( element + ' .page2Button' ).click( gotoPage2 );
    
    function gotoPage2( e )
	{
		changePage( 'p2' );
        $('.headerheading').text("YOUR MISSION");
	}
    
    $( element + ' .page6Button' ).click( gotoPage6 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    $( element + ' .page7Button' ).click( gotoPage7 );
    
    function gotoPage7( e )
	{
		changePage( 'p7' );
        $('.headerheading').text("CONTACT");
	}
    
}


//-------------------------------------------------------------From page2---------------------------------------------------

function page2( element )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( element + ' .page6Button' ).click( gotoPage6 );
    
    $( element + ' .seastarButton' ).click( gotoPage8 );
    $( element + ' .angelButton' ).click( gotoPage9 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    //------------------------------------------------Via PopUps----------------------------------------------
    
        function gotoPage8( e )
	{
		changePage( 'p8' );
        $('.headerheading').text("YOUR MISSION");
	}

    function gotoPage9( e )
	{
		changePage( 'p9' );
        $('.headerheading').text("YOUR MISSION");
	}
}


//-------------------------------------------------------------From page3---------------------------------------------------

function page3( element )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( element + ' .page6Button' ).click( gotoPage6 );
    $( element + ' .industryButton' ).click( gotoPage10 );
    $( element + ' .natureButton' ).click( gotoPage11 );
    $( element + ' .cultureButton' ).click( gotoPage12 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    function gotoPage10( e )
	{
		changePage( 'p10' );
        $('.headerheading').text("THE RUHR AREA");
	}
    
    function gotoPage11( e )
	{
		changePage( 'p11' );
        $('.headerheading').text("THE RUHR AREA");
	}
    
    function gotoPage12( e )
	{
		changePage( 'p12' );
        $('.headerheading').text("THE RUHR AREA");
	}
    
}


//-------------------------------------------------------------From page4---------------------------------------------------

function page4( element )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( element + ' .page5Button' ).click( gotoPage5 );
    
    function gotoPage5( e )
	{
		changePage( 'p5' );
        $('.headerheading').text("TESTIMONIALS");
	}
    
    $( element + ' .page6Button' ).click( gotoPage6 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
}


//-------------------------------------------------------------From page5---------------------------------------------------

function page5( )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( ' .page6Button' ).click( gotoPage6 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}    
}


//-------------------------------------------------------From page8 (SeaStar Pop-Up)------------------------------------------------

function page8( )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( ' .page6Button' ).click( gotoPage6 );
    $( ' .closeX' ).click( gotoPage2 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    function gotoPage2( e )
	{
        
		changePage( 'p2' );
        $('.headerheading').text("YOUR MISSION");
	}
    
}

//-------------------------------------------------------From page9 (Angel Pop-Up)------------------------------------------------

function page9( )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( ' .page6Button' ).click( gotoPage6 );
    $( ' .closeX' ).click( gotoPage2 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    function gotoPage2( e )
	{
        
		changePage( 'p2' );
        $('.headerheading').text("YOUR MISSION");
	}
    
}

//-------------------------------------------------------From page10 (Industry Pop-Up)------------------------------------------------

function page10( )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( ' .page6Button' ).click( gotoPage6 );
    $( ' .closeX2' ).click( gotoPage3 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    function gotoPage3( e )
	{
        
		changePage( 'p3' );
        $('.headerheading').text("THE RUHR AREA");
	}
    
}

//-------------------------------------------------------From page11 (Nature Pop-Up)------------------------------------------------

function page11( )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( ' .page6Button' ).click( gotoPage6 );
    $( ' .closeX2' ).click( gotoPage3 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    function gotoPage3( e )
	{
        
		changePage( 'p3' );
        $('.headerheading').text("THE RUHR AREA");
	}
    
}

//-------------------------------------------------------From page12 (Culture Pop-Up)------------------------------------------------

function page12( )
{
    //------------------------------------------------From the page directly----------------------------------------------
    $( ' .page6Button' ).click( gotoPage6 );
    $( ' .closeX2' ).click( gotoPage3 );
    
    function gotoPage6( e )
	{
		changePage( 'p6' );
        $('.headerheading').text("SIGN UP");
	}
    
    function gotoPage3( e )
	{
        
		changePage( 'p3' );
        $('.headerheading').text("THE RUHR AREA");
	}
    
}
