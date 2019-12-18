/* eslint quote-props: 0 */
/* eslint max-len: 0 */

const langEN = {
  en: {
    // Login view
    'Login.title': 'Login to your eSolidar Business account',

    // Header view
    'Header.logout': 'Logout',
    'Header.signin': 'Sign In',
    'Header.register': 'Register',
    'Header.goEsolidar': 'Go to eSolidar.com',

    // Dashboard view
    'Dashboard.title': 'eSolidar Business',

    // USer Register
    'facebookRegister': 'Continue with facebook',
    'emailPlaceholder': 'Your business email address',

    // Auctions
    'Auctions.title': 'Auctions',
    'Auctions.addAuction': 'New auction',
    'auctionShippingText': 'Information about the shipping costs of the prize to the winner.',
    'auctionPaymentText': 'Give instructions about how the winner will make the payment.',
    'noAuctionsData': 'There is no auctions to display',

    // Import users
    'importEmailsPlaceholder': 'Add email',

    // Add Auction
    'Auctions.list.title': 'Auctions list',
    'Auctions.add.formTitle': 'Auction Information',

    // Charity needs
    'manageRequestsText': 'Manage requests',
    'searchRequestsText': 'Search requests',
    'place': 'Write a place',
    'selectDistance': 'Select distance',
    'generalText': 'General',
    'requestText': 'Request',
    'every_week': 'Every week',
    'every_month': 'Every month',
    'every_quarter': 'Every quarter',
    'request_saved': 'Your request has been successfully submitted and is pending approval. We will contact you after review.',

    // Utils
    'selectCountry': 'Select country',
    'serchByNameOrEmail': 'Search by name or email',
    'noDataText': 'There is no data to display',
    'profileText': 'Profile',
    'paymentText': 'Payment methods',
    'billingText': 'Billing History',
    'auctionPrivate': 'Private',
    'auctionPublic': 'Public',
    'invalidEmailText': 'Email is invalid!',
    'invalidImageMax': 'The image may not be greater than 5MB',
    'invalidImageDimensions': 'The image should be at least 500px by 470px.',
    'infoPublicPost': 'This will make your posts public for everyone',
    'errorText': 'Could not complete your request, please try again later.',
    'commentHereText': 'Write here...',
    'selectCategory': 'Select Category',
    'commentHere': 'Comment here',
    'nextText': 'Next',
    'waitText': 'Please wait...',
    'invalidFile': 'The file is invalid!',
    'error': 'An unexpected error occurred, please sign in again. If the problem persists contact us.',
    'phoneFormat': '+44 07400 123456',
    'newNotification': 'You have a new notification',
    'CompanyInText': 'Your interest to support this initiative was registered. You should wait for the charity confirmation.',
    'status': 'Status',
    'pending': 'Pending',
    'payed': 'Payed',
    'completed': 'Completed',
    'deleted': 'Removed',
    'approved': 'On going',
    'rejected': 'Rejected',
    'logo_imageError': 'Your logo image should be at least 200px per 200px',
    'coverError': 'Your cover image should be at least 1600px per 560px',
    'phoneError': 'The phone must be a valid phone number. Verify the indicative number',

    // Landing Page
    'forCompanies': 'For Companies',
    'forEmployees': 'For Employees',

    // Requests
    'joinedStatusTextPending': 'Waiting approval',
    'joinRequest': "I'm In",
    'requestDonation': 'Donations',
    'requestGoods': 'Goods ',
    'requestVolunteering': 'Volunteering ',
    'requestStatusFinished': 'Finished',
    'requestStatusRemoved': 'Removed',
    'statusDeclined': 'Declined',
    'statusActive': 'Active',
    'statusPending': 'Pending',
    'statusReviewed': 'Completed and revised',
    'requestStatusDeclined': 'Declined',
    'statusEnded': 'Ended',
    'requestCompanyStatusConfirmed': 'Accepted',
    'requestCompanyStatusDeclined': 'Declined',
    'requestCompanyStatusCanceled': 'Canceled',
    'requestCompanyStatusReviewed': 'Reviewed',
    'requests.comment_to_institution': 'Leave a message to the charitable cause',
    'declineRequestEmployeeModalSubmitText': 'Yes, decline',

    // Modals
    'declineRequestEmployeeModalTitle': 'Decline',
    'declineRequestEmployeeModalBody': 'Do you want to decline the support of this employee?',
    'declinetEmployeeModalSubmitText': 'Yes, decline',
    'acceptRequestEmployeeModalTitle': 'Accept',
    'acceptRequestEmployeeModalBody': 'Do you want to accept the support of this employee?',
    'acceptRequestEmployeeModalSubmitText': 'Accept',
    'undoRequestEmployeeModalTitle': 'Undo',
    'undoRequestEmployeeModalBody': 'Do you want to revert this action?',
    'undoRequestEmployeeModalSubmitText': 'Yes',

    // Departments
    'noDepartments': 'There are no teams created',
    'departmentsText': 'Teams',
    'selectDepartment': 'Team',

    // Company documents
    'noDocuments': 'There is no shared files yet',
    'noDocumentResults': 'There are no results according to the search',
    'documentsText': 'Documents',
    'searchDocuments': 'Search by title or description',

    // Crowdfunding campaigns
    'crowdfundingCreatedMessage': 'Your campaign was successful created',
    'A sua campanha foi criada com sucesso': 'Your campaign was successful updated',
    'showOptions': 'Show options',
    'noCampaigns': 'There are no campaigns',
    'loadContributors': 'Show contributions list',
    'finalizeCampaign': 'Finalize campaign',
    'editCampaign': 'Edit campaign',
    'declineCampaign': 'Decline campaign',
    'acceptCampaign': 'Accept campaign',
    'searchContributorTableInputPlaceholder': 'Search contributor',
    'noContributors': 'No contributors',
    'reward_descriptionPlaceholder': 'For example: We will donate €500 more if 100% is raised…',
    'after_yesterday': 'The earliest date to start should be today.',
    'After_start_date': 'The end date should be later than start date.',

    // Gift Cards
    'maxPerYearInvalid': 'The maximum donated annually must be greater than 0',
    'matchdonation.danger.updated': 'There was an error loading configuration data.',
    'searchCampaignTableInputPlaceholder': 'Search campaign ...',
    'searchEmployeeTableInputPlaceholder': 'Search employee',

    // Match Donation
    'matchDonationUpdated': 'The configuration has been saved successfully.',
    'searchMatchDonationsPlaceholder': 'Search donations',
    'noDataMatchDonationsList': 'There are no donation.',

    // Brands
    'brandDeleteConfirmTitle': 'Delete brand',
    'brandDeleteConfirmText': 'Are you sure do you want to delete this brand?',
    'brandDeleteConfirmButton': 'Delete',

    'AlphaDash': 'The employee number may only contain letters, numbers, and dashes.',
  },
};

export default langEN;
