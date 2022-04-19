const { json } = require('express');
const express = require('express');
const router = express.Router();
let Group = require("../models/studentgroup");

router.route("/create").post(async (req,res)=>{

    const name = req.body.name;
    const member1 = req.body.member1;
    const member2 = "Unknown";
    const member3 = "Unknown";
    const member4 = "Unknown";
    const supervisor = "Not defined";
    const topic = "Not defined";
    const cosupervisor = "Not defined";
    const panel = "Not defined";
    const marks = 0;

    const newGroup = new Group({
        name,
        member1,
        member2,
        member3,
        member4,
        supervisor,
        topic,
        cosupervisor,
        panel,
        marks
    })

    await newGroup.save().then(()=>{
        res.json({"msg":"Group Created!", "status":true});
    }).catch((err)=>{
        res.json({"msg":"Group Creation failed!", "status":false});
    })

});

router.route("/").get(async (req,res)=>{

    await Group.find().then((Groups)=>{
        res.json(Groups)
    }).catch((err)=>{
        console.log(err);
    })

});

router.route("/updatemember/:name").put(async (req,res)=>{

    let grpName = req.params.name;
    const member = req.body.tempMember;
    const email = req.body.email;

    if(member === "member2"){
        const update = await Group.findOneAndUpdate({name:grpName}, {member2:email}).then(()=>{
            res.json({"msg":"Group Updated", "status":true});
        }).catch((err)=>{
            res.json({"msg":"Erro", "status":false});
        })
    }

    if(member === "member3"){
        const update = await Group.findOneAndUpdate({name:grpName}, {member3:email}).then(()=>{
            res.json({"msg":"Group Updated", "status":true});
        }).catch((err)=>{
            res.json({"msg":"Erro", "status":false});
        })
    }

    if(member === "member4"){
        const update = await Group.findOneAndUpdate({name:grpName}, {member4:email}).then(()=>{
            res.json({"msg":"Group Updated", "status":true});
        }).catch((err)=>{
            res.json({"msg":"Erro", "status":false});
        })
    }

});

router.route("/delete/:id").delete(async (req,res)=>{

    let userId = req.params.id;

    await Group.findByIdAndDelete(userId).then(()=>{
        res.json("Group Deleted");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete"});
    })

});

router.route("/get/:name").get(async (req,res)=>{

    let grpname = req.params.name;

    const Groups = await Group.findOne({name:grpname}).then((Groups)=>{
        res.json(Groups)
    }).catch((err)=>{
        res.status(500).send({status: false});
    })

});

router.route("/check/:name").get(async (req,res)=>{

    let grpName = req.params.name;

    const Groups = await Group.findOne({name:grpName}).then((Groups)=>{
        if(grpName == Groups.name){
            res.json(false);
        }
        else{
            res.json(true);
        }
    }).catch((err)=>{
        res.json(true);
    })

});

module.exports = router;