angular.module('main', ['ui.bootstrap','ngAnimate']);
angular.module('main').controller('CarouselDemoCtrl', function ($scope, $modal, $log) {
    $scope.myInterval = 100000;
    var slides = $scope.slides = [];
    $scope.addSlide = function (p) {
        slides.push(p);
    };
    $scope.addSlide({ image: 'images/bg01.jpg', text: 'Introduction' });
    $scope.addSlide({ image: 'images/bg02.jpg', text: 'Friends' });
    $scope.addSlide({ image: 'images/bg03.jpg', text: 'Working experience' });
    $scope.addSlide({ image: 'images/bg04.jpg', text: 'Development philosophy' });

    $scope.$watch('slides[0].active',
        function (active) {
            if (active) {
                $scope.bool0 = true;
                $scope.bool1 = false;
                $scope.bool2 = false;
                $scope.bool3 = false;
            }
        });
    $scope.$watch('slides[1].active',
        function (active) {
            if (active) {
                $scope.bool0 = false;
                $scope.bool1 = true;
                $scope.bool2 = false;
                $scope.bool3 = false;
            }
        });
    $scope.$watch('slides[2].active',
        function (active) {
            if (active) {
                $scope.bool0 = false;
                $scope.bool1 = false;
                $scope.bool2 = true;
                $scope.bool3 = false;
            }
        });
    $scope.$watch('slides[3].active',
        function (active) {
            if (active) {
                $scope.bool0 = false;
                $scope.bool1 = false;
                $scope.bool2 = false;
                $scope.bool3 = true;
            }
        });
    //$scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.content = "";
    $scope.open = function (type, content) {
        var modal = 'myModalContent.html';
        var modalCtrl = "";
        if (type === "video") {
            modal = 'videoModal.html';
            modalCtrl = "ModalInstanceCtrlVideo";
        } else {
            if (type === "image") {
                modal = 'imageModal.html';
                modalCtrl = "ModalInstanceCtrlImage";
            } else {
                modal = 'textModal.html';
                modalCtrl = "ModalInstanceCtrlText";
                if (content === "manchester") {
                    content = "<div style='padding: 10px 10px 10px 20px;'>" +
                        "<h5>Responsibilities:</h5>"+
                        "<p>•	Under requirements, I am responsible for developing a customerized stock management software and smart phone applicaton.</p>"+
                        "<p>•	Attending requirement meeting and providing stable and reasonable solutions.</p>"+
                        "<h5>Achievements: </h5>"+
                        "<p>•	Using asp.net, c# and relevant techniques to create an inventory system.</p>"+
                        "<p>•	Developing android and IOS applications for inventory managers usage.</p></div>";
                }
                if (content === "gosweetspot") {
                    content = "<div style='padding:10px;padding-left:20px;'><h5>Responsibilities:</h5><p>•	Basing on the senior developers’ designs and original requirement and using C# and relevant technique to develop applications.</p><p>•	Attending requirement meeting and providing stable and reasonable solutions.</p><h5>Achievements: </h5><p>•	Using asp.net, c# and relevant techniques to create a quoting offer applications.</p><p>•	Developing android,IOS and Windows phone applications for our Parcel Track system.</p><p>•	Integerating EBey and Unleashed systems into our current management system.</p></div>";
                }
                if(content==="ishoppers"){
                    content = "<div style='padding:10px;padding-left:20px;'><h5>Responsibilities:</h5><p>•	Designing structure, using asp.net, c# and relevant technic to create new website applications for the company.</p><p>•	Participating in business meetings and according to customer’s requirement I am responsible for offering reasonable IT solutions.</p><p>•	Managing and organizing resource code version.</p><p>•	Testing applications and deploying them on the internet.</p><h5>Achievements: </h5><p>•	Completing a business demonstration website named Vineyardnz that is an online trade website.</p><p>•	Finishing two enterprise introduction website named Otterbuilding and Ishoppersnz.</p><p>•	Another enterprise introduction website and upgrading Vineyardnz program are in the process.</p></div>";
                }
                if (content === "bargain") {
                    content = "<div style='padding:10px;padding-left:20px;'><h5>Responsibilities:</h5><p>•	Designing database structure and using c# to build new functions for buz and netSky. Offering reasonable solutions.</p><p>•	Maintaining old programs. Perfecting old code that other people did and creating new features in the old program.</p><p>•	Managing and organizing resource code version.</p><p>•	Testing applications and deploying them on the internet.</p><h5>Achievements: </h5><br><p>•	Completing a business website named Bargainhunting that is similar to the Trademe website.</p><p>•	Finishing a social network website named Buz.</p><p>•	A website integration platform.</p></div>";
                }
                if (content === "beijing") {
                    content = "<div style='padding:10px;padding-left:20px;'><h5>Responsibilities:</h5><p>•	Software development supervisor was in charge of requirement analysis, design, build, testing, maintenance and application training.</p><p>•	Providing recommendations for the senior leadership to support the solution plans of the pre, post purchase.</p><h5>Achievements:</h5><p>•	We created a set of computer equipment management and monitoring system. There are two manufactories using our system.</p><h5>Detail Description:</h5><p>Period: 2007/1-2008/11. The project name: computer equipment management system</p><p>I was working as not only a Project Manager but also a main developer. My duty was to provide technical support for team members and meanwhile strictly keep our process on the schedule. What is more important thing was to keep the software on the good quality. Our team had four people and we used VS2005 C# tool to have finished the Computer resource management system for cigarette industry. It took our about six months. The system is a website application based on the IIS. The database is SQLServer2005 and the technology that we adopted was C#, AJAX,CSS,jQuery,Linq,Html and SqlDataSource, which the project based on B/S structure providing service of managing computer devices. System include daily maintain management, device statistic, logistics management.</p></div>";
                }
                if (content === "infohold") {
                    content = "<div style='padding:10px;padding-left:20px;'><h5>Responsibilities: </h5><p>•	Project manager was in charge of requirement analysis, design, developing, testing and distributing the application for the health industry and the house property management industry.</p><p>•	Providing professional software solution plans for our customers and offering supports of the service of pre, post purchase</p><p>•	Providing and Implementing services of software system integrate services.</p><p>•	Providing maintaining and updating services of application systems and organizing customers training and so on.</p><h5>Achievements:</h5><p>•	We have a set of hospital system manage software and house property management system. There are four hospitals using our system, which create good profit for the company.</p><p>•	Local government is our main client and their house property management system is our products.</p><h5>Detail Description:</h5><p>•	2006/04 – 2006/12. The project name: Jilin Chemical Fiber Factory Office Automatic System</p><p>I was a main developer in the team. We used the Bea WebLogic as our web service and used the workshop development tool basing on Java to develop B/S structure enterprise application. The technology that we used is Java,CSS,HTML,jQuery,MVC and Oracle database. Also, through this system to integrate other different system such as mail system, sell system, logistics system and finance system so on.</p><p>•	2005/08 -- 2006/03. The project name: Jilin City Apartment Property Bureau Operation System</p><p>I was a project manager and also a main developer. We used the Bea WebLogic as our web service and used the workshop development tool basing on Java to develop B/S structure enterprise application. The technology that we used is Java,CSS,HTML,jQuery,MVC and Oracle database.Project Description: adding GIS (geography information system), getting the old frame C/S upgrade to B/S(multiply tie design). system include apartment property registration, apartment foreordainment sell management, apartment map and area calculation management, changing attributes of property management, mortgage management,  law close apartment down management and property archives research system so on. Achieving data to share public between different departments and provide a normative and convenient operation platform for managers of government.</p><p>•	2004/04 -- 2005/06：Yanji Cigarette Factory Customer Relation Management System(CRM)</p><p>I was a developer. We used the Bea WebLogic as our web service and used the workshop development tool basing on Java to develop B/S structure enterprise application. The technology that we used is Java,CSS,HTML,jQuery,MVC and Oracle database.</p><p>Project Description: basing on J2EE platform, B/S structure, achieving nine subsystem including rival information of price collection, sell process management, sell goal management, brand strategy, cost plan management, decision analysis management, enterprise portal, cooperation business system, data integration.</p><p>•	2003/03 -- 2003/11：Changchun City Apartment Property Bureau Operation system</p><p>I was a team member and working as a developer. We used the Bea WebLogic as our web service and used the workshop development tool basing on Java to develop B/S structure enterprise application. The technology that we used is Java,CSS,HTML,jQuery,MVC and Oracle database.</p><p>Project Description: combining C/B with B/S structure, system include apartment property registration, apartment foreordainment sell management, apartment mapping and area calculation management, exchange management, mortgage management and law close apartment down management so on. Implement data to share public between different departments and provide a normative and convenient operation flat for managers of government.</p><p>•	2001/11 -- 2002/05：Tonggang staff health insurance system</p><p>I was a team leader and also working as a developer. We used the Sybase PowerBuilder development tool. The database is Sybase 11.</p><p>Project Description: system include policy management, check management, daily operation system, finance system, search and report system, decision and analysis system, customers system, insurance card management system and check account between insurance centre and hospital system.</p><p>•	2000/11 -- 2006/10：Jilin centre hospital information management system (this hospital is the biggest one in Jilin)</p><p>I was a team leader and also working as a developer. We used the Sybase PowerBuilder development tool. The database is Sybase.</p><p>Project Description: system include registration, drug storage and bureau, charge, doctor work situation, medical cure dept, nurses work situation, settle account functions, patience archives, report forms and decision analysis system so on. I was in charge of hospital system maintaining until 2008. During the last a few years, we had four hospitals using our products.</p><p>•	2000/08 -- 2000/10：Jilin City Apartment Property Bureau Operation system (old)</p><p>I was a team leader and also working as a developer. We used the Sybase PowerBuilder development tool and the database is Sybase.</p><p>Project Description: system include apartment property registration, apartment foreordainment sell management, apartment map and area calculation management, property changing management, mortgage management, law close apartment down management and archives research system so on. Achieving data to share public between different departments and provide a normative and convenient operation platform for managers of government.</p></div>";
                }
            }
        }
        //$scope.content = content;
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: modal,
            controller: modalCtrl,
            size: 'lg',
            resolve: {
                content: function () {
                    return content;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
   
});

angular.module('main').controller('ModalInstanceCtrlVideo', function ($scope, $modalInstance, $sce, content) {

    $scope.videoLink = $sce.trustAsResourceUrl("https://www.youtube.com/v/" + content);

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

angular.module('main').controller('ModalInstanceCtrlImage', function ($scope, $modalInstance, $sce, content) {

    $scope.imageLink = content;

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});

angular.module('main').controller('ModalInstanceCtrlText', function ($scope, $modalInstance, $sce, content) {
    $scope.textContent = $sce.trustAsHtml(content);
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});