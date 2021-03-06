<?php require_once 'dbconnection.php'; ?>
<?php include 'functions/shared_functions.php'; ?>

<?php
	header("Access-Control-Allow-Origin: *");
	// Encodes data from a POST request
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);

    //Uses said POST data
    $table = $request->table;
    $userid = $request->userid;

    $foodname = $request->foodname;
    $foodcode = $request->foodcode;
    $foodtable = $request->foodtable;

    $edibleproportion = $request->edibleproportion;
    $energy_kcal = $request->energy_kcal;
    $protein_g = $request->protein_g;
    $water_g = $request->water_g;
    $fat_g = $request->fat_g;
    $carbohydrate_g = $request->carbohydrate_g;

    $quantity = $request->quantity;
    $mealname = $request->mealname;
    $meal = $request->meal;
    $weight = $request->weight;

    $swollenlegs = $request->swollenlegs;
    $swollenfeet = $request->swollenfeet;
    $swollenabdomen = $request->swollenabdomen;

    $symptom = $request->symptom;
    $symptomid = $request->symptomid;
    $symptomtable = $request->symptomtable;
    $rating = $request->rating;
    $comment = $request->comment;

    $sqlinsert = "INSERT INTO " . $table . " (";
    $sqlvalue = ") VALUES (";
    $sqlend = ")";
//    INSERT INTO x (cols) VALUES (values)

    $error = false;
    switch ($table) {
        case "userfoodlist":
            $cols = "userid,foodname,edibleproportion,energy_kcal,protein_g,water_g,fat_g";
            $values = "'{$userid}','{$foodname}','{$edibleproportion}','{$energy_kcal}','{$protein_g}','{$water_g}','{$fat_g}'";
            break;
        case "usermeallist":
            $cols = "userid,mealname,foodtable,foodcode,edibleproportion,foodname,quantity,energy_kcal,protein_g,water_g,fat_g";
            $values = "'{$userid}','{$mealname}','{$foodtable}','{$foodcode}','{$edibleproportion}','{$foodname}','{$quantity}','{$energy_kcal}','{$protein_g}','{$water_g}','{$fat_g}'";
            break;
        case "userweightmanifest":
            $cols = "userid,weight,swollenfeet,swollenlegs,swollenabdomen";
            $values = "'{$userid}','{$weight}','{$swollenfeet}','{$swollenlegs}','{$swollenabdomen}'";
            break;
        case "userfoodmanifest":
            $cols = "userid,foodtable,foodcode,foodname,quantity,edibleproportion,energy_kcal,protein_g,water_g,carbohydrate_g,fat_g,meal";
            $values = "'{$userid}','{$foodtable}','{$foodcode}','{$foodname}','{$quantity}','{$edibleproportion}','{$energy_kcal}','{$protein_g}','{$water_g}','{$carbohydrate_g}','{$fat_g}','{$meal}'";
            break;
        case "usersymptommanifest":
            $cols = "userid,symptomtable,symptomid,symptom,rating,comment";
            $values = "'{$userid}','{$symptomtable}','{$symptomid}','{$symptom}','{$rating}','{$comment}'";
            break;
        case "usersymptomlist":
            $cols = "userid,symptom";
            $values = "'{$userid}','{$symptom}'";
            break;
        default:
            $error = true;
    }
	
    $sql = $sqlinsert . $cols . $sqlvalue . $values . $sqlend;
    
    $result = sqlsrv_query($conn, $sql) or die(errorparse("Error: Query to push data failed"));


    if($error){
        echo errorparse("failure");
    }else{
        echo errorparse("success");
    }
?>
