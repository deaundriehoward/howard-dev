var app;
app = angular.module('HowardDev', [])
    .controller('WorkController', function WorkController($scope) {
        $scope.projects = [
            {
                title: 'Cupcakery',
                image: 'https://images.unsplash.com/photo-1457508252818-162dc1934c2f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d1096164e583896dd6e1aff664811584',
                desc: 'Local owned, but nationally shipped. Cupcakery is the talk of everyone and the last taste in their mouth. Visit their page to see what all the taste buds are all about!'
            },
            {
                title: 'Alex G.',
                image: 'https://images.unsplash.com/photo-1415886541506-6efc5e4b1786?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=14247932e373a2796cb28c28734e7e31',
                desc: 'When it comes to being musically inclined, A.G is on another level. Visit his homepage to see what your ears have been missing!'
            },
            {
                title: 'The Station',
                image: 'https://images.unsplash.com/photo-1456894332557-b03dc5cf60d5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=29a9bb29bcbf19a5954d0110b19d5b51',
                desc: 'The Station is a composition of stations to help develop a better you. To guide you on generating a better life for yourself in whatever way that may be. Visit The Station now to see what station is best for you!'
            }
        ];
    }).controller('ServiceController', function ServiceController($scope) {
        $scope.services = [
            {title: 'Web Development' , icon: 'code', desc:"Your visual marketing communicates your brand, expresses the soul of your company, and is the iconic mark of your business. Howard Dev helps businesses create their visual brand so your ideal customers recognize your full value."},
            {title: 'Mobile Apps', construction: '(Coming Soon to a phone near you!)', icon: 'stay_current_portrait', desc:"Being able to view content anywhere and everywhere has been a great asset in the recent years. It allows your company to reach a wider range of people. Howard Dev help business bring there brand mobile and on-the-go. "},
            {title: 'Branding', icon: 'mode_edit', desc:"Personal Brands are hard to come by. Even harder is starting that brand. With our help, your brand will be designed and stabilized through our branding strategies and structures. "},
            {title: 'eCommerce', icon: 'shopping_cart', desc:"Shopping have expanding exponentially over the last decade. Products are flying off the shelves daily, but even more of the Product Page. We offer custom as well as themed to help you eCommerce succeed"}

        ];
    });