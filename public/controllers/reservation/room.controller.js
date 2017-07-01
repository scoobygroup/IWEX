/**
 * Created by User on 7/1/2017.
 */

angular.module('StudentApp').controller('RoomController', ['$scope', 'RoomService',
    function ($scope, RoomService) {

        this.amountofrooms;
        function getRooms() {
            // $scope.drivers = DriverService.get();
            RoomService.get().then(reserv => {
                //place where it show the output in table
                $scope.roomParent = reserv;
            })
        };


        getRooms();

        $scope.calculate = () => {
            getRooms();
        }

        $scope.AddRoomDetails = (res) => {
            RoomService.add(res).then(() => {
                getRooms();

                res.roomtype="";
                res.price="";
                console.log('Added');
                $scope.getdrugordersucessmsg ='Successfull';
                $scope.showAlert();
            });
        };



        $scope.showAlert = function(){
            $scope.mytrue = false;
            $scope.myfalse = false;
            console.log($scope.getdrugordersucessmsg);
            if($scope.getdrugordersucessmsg=="Successfull")
                $scope.mytrue = true;
            else if($scope.getdrugordersucessmsg=="Something Went Wrong!!!!")
                $scope.myfalse = true;
            else if($scope.getdrugordersucessmsg=="Please check the check-out date")
                $scope.myfalse = true;
            else if($scope.getdrugordersucessmsg=="Can only book rooms for maximum 10 days")
                $scope.myfalse = true;
            else if($scope.getdrugordersucessmsg=="No available rooms")
                $scope.myfalse = true;
        };

        $scope.deleteReservation = (id) => {
            RoomService.delete(id).then(() => {
                getRooms();

            });
        };

        $scope.editReservation=function (id) {
            console.log(id);
            RoomService.getById(id).then((reserv)=>{

                $scope.roomChild=reserv;
                getRooms();
            });
        };


        $scope.updateReservation = (id,reserv) => {
            RoomService.update(id,reserv).then(() => {
                //$scope.resParent._id = reserv._id;
                getRooms();
                $scope.roomParent.type = reserv.type;
                $scope.roomParent.price = reserv.price;

                getRooms();

            });
        };

    }]);