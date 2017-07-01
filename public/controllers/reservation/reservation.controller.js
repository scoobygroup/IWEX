/**
 * Created by User on 6/29/2017.
 */

angular.module('StudentApp').controller('ReservationController', ['$scope', 'ReservationService',
    function ($scope, ReservationService) {


        function getReservations() {
            // $scope.drivers = DriverService.get();
            ReservationService.get().then(reserv => {
                //place where it show the output in table
                $scope.resParent = reserv;
            })
        };

        /*$scope.refreshit = () => {


         };*/

        getReservations();



        $scope.addReservation = (res) => {
            ReservationService.add(res).then(() => {
                getReservations();
                amountofrooms = amountofrooms - res.noofrooms;
                res.name="";
                res.email="";
                res.nic="";
                res.checkin="";
                res.checkout="";
                res.nights="";
                res.noofrooms="";
                $scope.getdrugordersucessmsg ='Successfull';
                $scope.showAlert();
            });
        };

        $scope.setRooms = () => {
            amountofrooms = 10;
            document.getElementById("setrooms").disabled = 'true';
        }

        $scope.checkAvailability = (no) => {
            if(amountofrooms >= no)
            {
                $scope.getdrugordersucessmsg ='Successfull';
                console.log('already '+ amountofrooms);
                console.log('ordeer '+no);
                $scope.showAlert();
            }

            else
            {
                console.log('already '+ amountofrooms);
                console.log('ordeer '+no);
                $scope.getdrugordersucessmsg = 'No available rooms';
                $scope.showAlert();
            }
        }

        $scope.checkDates = (d1,d2) => {
            console.log(d1);
            console.log(d2);

            var onlydate1 = d1.toLocaleString().split(',')[0];
            var onlydate2 = d2.toLocaleString().split(',')[0];
            var y1 = parseInt(onlydate1.split("/")[2]);
            var y2 = parseInt(onlydate2.split("/")[2]);
            var m1 = parseInt(onlydate1.split("/")[0]);
            var m2 = parseInt(onlydate2.split("/")[0]);
            var day1 = parseInt(onlydate1.split("/")[1]);
            var day2 = parseInt(onlydate2.split("/")[1]);
            if (y1 > y2)
            {
                $scope.getdrugordersucessmsg ='Please check the check-out date';
                $scope.showAlert();
            }

            else if (y1 == y2)
            {
                if (m1 > m2)
                {
                    $scope.getdrugordersucessmsg ='Please check the check-out date';
                    $scope.showAlert();
                }

                else if (m1 == m2)
                {
                    if (day1 > day2 )
                    {
                        $scope.getdrugordersucessmsg ='Please check the check-out date';
                        $scope.showAlert();
                        console.log("INN");
                    }

                    else
                    {
                        $scope.getdrugordersucessmsg ='Successfull';
                        $scope.showAlert();
                    }
                }
            }
            console.log(y1+'/'+m1+'/'+day1);
            console.log(y2+'/'+m2+'/'+day2);
            var one = new Date(onlydate1);
            var two = new Date(onlydate2);
            var timeDiff = Math.abs(two.getTime() - one.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


            if(diffDays > 10)
            {
                $scope.getdrugordersucessmsg ='Can only book rooms for maximum 10 days';
                $scope.showAlert();

            }
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
            ReservationService.delete(id).then(() => {
                getReservations();

            });
        };

        $scope.editReservation=function (id) {
            console.log(id);
            ReservationService.getById(id).then((reserv)=>{

                $scope.resChild=reserv;
                getReservations();
            });
        };


        $scope.updateReservation = (id,reserv) => {
            ReservationService.update(id,reserv).then(() => {
                //$scope.resParent._id = reserv._id;
                getReservations();
                $scope.resParent.name = reserv.name;
                $scope.resParent.email = reserv.email;
                $scope.resParent.nic = reserv.nic;
                $scope.resParent.checkin = reserv.checkin;
                $scope.resParent.checkout = reserv.checkout;
                $scope.resParent.nights = reserv.nights;
                $scope.resParent.noofrooms = reserv.noofrooms;
                //refreshit();
                //getReservations();
                getReservations();
                setTimeout(getReservations,3000);
                setTimeout(getReservations,2000);
            });
        };

    }]);