import React, { useEffect, useState } from "react";
import exposureDefaultValues from "../Forms/ExposureVisitForm/data/defaultValues.json";
import immersionDefaultValues from "../Forms/ImmersionForm/data/defaultValues.json";
import internshipDefaultValues from "../Forms/InternshipForm/data/defaultValues.json";

const useDraftData = (endpoint, identifier) => {
  const [data, setData] = useState(null);

  // --------------------Personal Information----------------------------------------------
  //   formdata.append("purpose_of_visit", data.purpose);
  //   formdata.append("family_name", data.familyName);
  //   formdata.append("first_name", data.firstName);
  //   formdata.append("date_of_birth", data.dob);
  //   formdata.append("expected_duration", data.duration);
  //   formdata.append("start_date", data.startDate);
  //   formdata.append("nationality", data.nationality);
  //   formdata.append("gender", data.gender);
  //   formdata.append("passport_no", data.passportNumber);
  //   formdata.append("photo", data.imageFile[0]);
  //   formdata.append("mailing_address", data.mailingAdd);
  //   formdata.append("telephone_mobile", data.mobilePhone);
  //   formdata.append("telephone_residence", data.telephoneNo);
  //   formdata.append("email", data.email);

  //   // -------------------------Education-----------------------------------------------------
  //   data.institutionName.forEach((element, index) => {
  //     formdata.append(`education[${index}][institution]`, data.institutionName[index]);
  //     formdata.append(`education[${index}][period_from]`, data.institutionFrom[index]);
  //     formdata.append(`education[${index}][period_to]`, data.institutionTo[index]);
  //     formdata.append(`education[${index}][major]`, data.major[index]);
  //     formdata.append(`education[${index}][qualification]`, data.qualification[index]);
  //   });

  //   // ----------------------------Employment Status-------------------------------------------
  //   formdata.append("current_employment[0][organization]", data.orgName);
  //   formdata.append("current_employment[0][designation]", data.designation);
  //   formdata.append("current_employment[0][since]", data.since);
  //   formdata.append("current_employment[0][responsibilities]", data.responsibility);

  //   // -------------------------Goals,Future,Org to meet---------------------------------------
  //   formdata.append("visit_prof_goal", data.profGoal);
  //   formdata.append("future_of_sb", data.futureSocialBusiness);
  //   formdata.append("grameen_org_to_meet", data.organization);

  //   // -------------------------Source Of Learning---------------------------------------------
  //   formdata.append("source_of_learning[0][campus]", data.sourceCampus);
  //   formdata.append("source_of_learning[0][reference]", data.sourceRef);
  //   formdata.append("source_of_learning[0][yc_website]", data.sourceYunus);
  //   formdata.append("source_of_learning[0][others]", data.sourceOthers);

  //   // -------------------------Emergency Contacts---------------------------------------------
  //   formdata.append("emmergency_contacts[0][name]", data.firstContactName);
  //   formdata.append("emmergency_contacts[0][address]", data.firstContactAddress);
  //   formdata.append("emmergency_contacts[0][telephone]", data.firstContactTel);
  //   formdata.append("emmergency_contacts[0][business_name]", data.firstContactBusinessName);
  //   formdata.append("emmergency_contacts[0][business_address]", data.firstContactBusinessAddress);
  //   formdata.append("emmergency_contacts[0][business_telephone]", data.firstContactBusinessTel);
  //   formdata.append("emmergency_contacts[0][relation_to_applicant]", data.firstContactRelation);
  //   formdata.append("emmergency_contacts[1][name]", data.secondContactName);
  //   formdata.append("emmergency_contacts[1][address]", data.secondContactAddress);
  //   formdata.append("emmergency_contacts[1][telephone]", data.secondContactTel);
  //   formdata.append("emmergency_contacts[1][business_name]", data.secondContactBusinessName);
  //   formdata.append("emmergency_contacts[1][business_address]", data.secondContactBusinessAddress);
  //   formdata.append("emmergency_contacts[1][business_telephone]", data.secondContactBusinessTel);
  //   formdata.append("emmergency_contacts[1][relation_to_applicant]", data.secondContactRelation);

  const formatData = (fetchedData) => {
    let formData = {};
    // Personal Information
    formData.purpose = fetchedData.purpose_of_visit;
    formData.familyName = fetchedData.family_name;
    formData.firstName = fetchedData.first_name;
    formData.dob = fetchedData.date_of_birth;
    formData.duration = fetchedData.expected_duration;
    formData.startDate = fetchedData.start_date;
    formData.nationality = fetchedData.nationality;
    formData.gender = fetchedData.gender;
    formData.passportNumber = fetchedData.passport_no;
    formData.imageFile = fetchedData.photo;
    formData.mailingAdd = fetchedData.mailing_address;
    formData.mobilePhone = fetchedData.telephone_mobile;
    formData.telephoneNo = fetchedData.telephone_residence;
    formData.email = fetchedData.email;

    let institutionName = [];
    // Educational Qualification
    fetchedData.education?.forEach(({ institution, period_from, period_to, major, qualification }, index) => {
      institutionName[index] = institution;

      //   formData.institutionName[index] = institution;
      //   formData.institutionFrom[index] = period_from;
      //   formData.institutionTo[index] = period_to;
      //   formData.major[index] = major;
      //   formData.qualification[index] = qualification;
    });
    formData.institutionName = institutionName;

    return formData;
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/formDummyData/exposure-visit-draft.json`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          // in case the api does not provide all the input field values that were empty we bind it with the default values using the spread operator
          // So that values that are not available form the api is initialized with an empty string or array or whatever the type of that input field is
          const formattedData = formatData(data);
          setData(formattedData);
          console.log(formattedData);
          // loadImage(data.imageFile, true);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return [data];
};

export default useDraftData;
