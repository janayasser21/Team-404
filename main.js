function checkAccess() {
    var userRole = localStorage.getItem('userRole');
    var currentURL = window.location.href;
  
    if ((userRole != 'banker' && 
      (currentURL.includes('/BankerTable.html')
      ||currentURL.includes('/BankerHome.html')
      ||currentURL.includes('/ViewLoanApp.html')
      ||currentURL.includes('/ViewCCapp.html')
      ||currentURL.includes('/ViewReports.html')
      ||currentURL.includes('/ViewClients.html')
      ||currentURL.includes('/SendNotif.html')
      ))||(userRole != 'client' && 
      (currentURL.includes('/ApplyCC.html')
      ||currentURL.includes('/Close.html')
      ||currentURL.includes('/ContactUs.html')
      ||currentURL.includes('/CreditCard.html')
      ||currentURL.includes('/CreditCardIssue.html')
      ||currentURL.includes('/home.html')
      ||currentURL.includes('/Loan.html')
      ||currentURL.includes('/Notifications.html')
      ||currentURL.includes('/Open.html')
      ||currentURL.includes('/PayCC.html')
      ||currentURL.includes('/Payments.html')
      ||currentURL.includes('/Reminder.html')
      ||currentURL.includes('/Report.html')
      ||currentURL.includes('/TechnicalIssue.html')
      ||currentURL.includes('/Transfer.html')
      ||currentURL.includes('/TransferDomestic.html')
      ||currentURL.includes('/TransferInternal.html')
      ||currentURL.includes('/TransferInternational.html')
      ||currentURL.includes('/ViewCCP.html')
      ||currentURL.includes('/ViewCCT.html')
      ))||(userRole != 'admin' && 
      (currentURL.includes('/AdminHome.html')
      ))) {
      window.location.href = replaceLastPartOfURL(currentURL,"index.html");
    }
  }

function replaceLastPartOfURL(url, replacement) {
  var parts = url.split('/');
  parts[parts.length - 1] = replacement;
  return parts.join('/');
}

function interceptURL() {
checkAccess();
}
window.onbeforeunload = interceptURL;
window.addEventListener('load', function() {
    checkAccess();
});