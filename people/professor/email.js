// Email.js version 5
var tld_ = new Array()
tld_[0] = "com";
tld_[1] = "org";
tld_[2] = "net";
tld_[3] = "ws";
tld_[4] = "info";
tld_[5] = "edu";		// PAT 2006/11/15
tld_[6] = "mobi";		// ACAH 20080118
tld_[7] = "biz";		// ACAH 20080118
tld_[8] = "name";		// ACAH 20080118
tld_[9] = "me.uk";	// ACAH 20080118
tld_[10] = "co.uk";
tld_[11] = "org.uk";
tld_[12] = "gov.uk";
tld_[13] = "ac.uk";
tld_[14] = "sch.uk";	// PAT 2003/11/19
tld_[15] = "uk";		// PAT 2004/02/26
tld_[16] = "net.uk";	// PAT 2004/11/11
tld_[20] = "com.au";	// PAT 2003/11/18
tld_[21] = "it";		// PAT 2003/11/19
tld_[22] = "au";		// PAT 2004/03/15
tld_[23] = "nl";		// PAT 2004/04/11
var topDom_ = 23;		// PAT 2003/04/11
var m_ = "mailto:";
var a_ = "@";
var d_ = ".";

function mail(name, dom, tl, params)
{
	var s = e(name,dom,tl);
	document.write('<a href="'+m_+s+params+'">'+s+'</a>');
}
function mail2(name, dom, tl, params, display)
{
	document.write('<a href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');
}
function e(name, dom, tl)
{
	var s = name+a_;
	if (tl!=-2)
	{
		s+= dom;
		if (tl>=0)
			s+= d_+tld_[tl];
	}
	else
		s+= swapper(dom);
	return s;
}
function swapper(d)
{
	var s = "";
	for (var i=0; i<d.length; i+=2)
		if (i+1==d.length)
			s+= d.charAt(i)
		else
			s+= d.charAt(i+1)+d.charAt(i);
	return s.replace(/\?/g,'.');
}
