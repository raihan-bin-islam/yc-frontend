/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useDraftData = (endpoint, formType) => {
  const [data, setData] = useState(null);

  const formatData = (fetchedData) => {
    let formData = {};
    // bind App id and id if available
    formData.app_id = fetchedData?.app_id;
    formData.id = fetchedData?._id;

    //======================================== Common Data For All Forms============================================
    //---------------------------------------- Personal Information ------------------------------------------------
    formData.familyName = fetchedData?.family_name || "";
    formData.firstName = fetchedData?.first_name || "";
    formData.dob = fetchedData?.date_of_birth || "";
    formData.duration = fetchedData?.expected_duration || "";
    formData.startDate = fetchedData?.start_date || "";
    formData.nationality = fetchedData?.nationality || "";
    formData.gender = fetchedData?.gender || "";
    formData.passportNumber = fetchedData?.passport_no || "";
    formData.imageFile = fetchedData?.photo || "";
    formData.mailingAdd = fetchedData?.mailing_address || "";
    formData.mobilePhone = fetchedData?.telephone_mobile || "";
    formData.telephoneNo = fetchedData?.telephone_residence || "";
    formData.email = fetchedData?.email || "";
    //------------------------------------ Educational Qualification -------------------------------------------------
    formData.institutionName = fetchedData?.education?.map(({ institution }) => institution) || [];
    formData.institutionFrom = fetchedData?.education?.map(({ period_from }) => period_from) || [];
    formData.institutionTo = fetchedData?.education?.map(({ period_to }) => period_to) || [];
    formData.major = fetchedData?.education?.map(({ major }) => major) || [];
    formData.qualification = fetchedData?.education?.map(({ qualification }) => qualification) || [];
    //--------------------------------------- Source Of Learning -----------------------------------------------------
    formData.sourceCampus = fetchedData?.source_of_learning[0]?.campus || "";
    formData.sourceRef = fetchedData?.source_of_learning[0]?.reference || "";
    formData.sourceYunus = fetchedData?.source_of_learning[0]?.yc_website || "";
    formData.sourceOthers = fetchedData?.source_of_learning[0]?.others || "";
    //---------------------------------------- Emergency Contacts ----------------------------------------------------
    // 1st Contact
    formData.firstContactName = fetchedData?.emmergency_contacts[0]?.name || "";
    formData.firstContactAddress = fetchedData?.emmergency_contacts[0]?.address || "";
    formData.firstContactTel = fetchedData?.emmergency_contacts[0]?.telephone || "";
    formData.firstContactBusinessName = fetchedData?.emmergency_contacts[0]?.business_name || "";
    formData.firstContactBusinessAddress = fetchedData?.emmergency_contacts[0]?.business_address || "";
    formData.firstContactBusinessTel = fetchedData?.emmergency_contacts[0]?.business_telephone || "";
    formData.firstContactRelation = fetchedData?.emmergency_contacts[0]?.relation_to_applicant || "";
    // 2nd Contact
    formData.secondContactName = fetchedData?.emmergency_contacts[1]?.name || "";
    formData.secondContactAddress = fetchedData?.emmergency_contacts[1]?.address || "";
    formData.secondContactTel = fetchedData?.emmergency_contacts[1]?.telephone || "";
    formData.secondContactBusinessName = fetchedData?.emmergency_contacts[1]?.business_name || "";
    formData.secondContactBusinessAddress = fetchedData?.emmergency_contacts[1]?.business_address || "";
    formData.secondContactBusinessTel = fetchedData?.emmergency_contacts[1]?.business_telephone || "";
    formData.secondContactRelation = fetchedData?.emmergency_contacts[1]?.relation_to_applicant || "";

    //========================================== Form Specific Data ===================================================
    // Exposure Visit Only
    if (formType === "exposure-visit") {
      // Personal Information
      formData.purpose = fetchedData?.purpose_of_visit || "";
      // Goals,Future,Org to meet
      formData.profGoal = fetchedData?.visit_prof_goal || "";
      formData.futureSocialBusiness = fetchedData?.future_of_sb || "";
      formData.organization = fetchedData?.grameen_org_to_meet || "";
    }

    // Immersion Program Only
    if (formType === "immersion-program") {
      // Reason To Apply
      formData.purposeForIntern = fetchedData?.reason_to_apply || "";
      formData.featureSocialBusiness = fetchedData?.interesting_features_sb || "";
      formData.participateGrameenOrg = fetchedData?.field_trip_details || "";
    }

    // Internship Program Only
    if (formType === "internship-program") {
      // Personal Information
      formData.interestField = fetchedData?.field_of_interest;
      // Notable Achievement
      formData.scholarship = fetchedData?.notable_achievement[0]?.name_of_scholarship || "";
      formData.organization = fetchedData?.notable_achievement[0]?.issueing_organization || "";
      formData.issueDate = fetchedData?.notable_achievement[0]?.date_of_issue || "";

      // Extra Curricular Activities
      formData.activity = fetchedData?.extra_curricular_activities?.map(({ activity }) => activity) || [];
      formData.position = fetchedData?.extra_curricular_activities?.map(({ position }) => position) || [];
      formData.achievement = fetchedData?.extra_curricular_activities?.map(({ achievement }) => achievement) || [];
      formData.activityPeriodFrom =
        fetchedData?.extra_curricular_activities?.map(({ period_from }) => period_from) || [];
      formData.activityPeriodTo = fetchedData?.extra_curricular_activities?.map(({ period_to }) => period_to) || [];
      //Reason To Apply
      formData.whyAndExpectation = fetchedData?.reason_to_apply || "";
      formData.interestIn = fetchedData?.interesting_features_sb || "";
      formData.additionalSkill = fetchedData?.additional_skills || "";
      formData.fieldTrip = fetchedData?.field_trip_details || "";
    }

    // Common Between Exposure Visit and Immersion Program
    if (formType === "exposure-visit" || formType === "immersion-program") {
      // Employment status is available in both exposure visit and immersion program form
      // Current Employment Status
      formData.orgName = fetchedData?.current_employment?.map(({ organization }) => organization)[0] || ""; // we need the data not the array so we take the value of the 0th index
      formData.designation = fetchedData?.current_employment?.map(({ designation }) => designation)[0] || "";
      formData.since = fetchedData?.current_employment?.map(({ since }) => since)[0] || "";
      formData.responsibility =
        fetchedData?.current_employment?.map(({ responsibilities }) => responsibilities)[0] || "";
    }
    // Common Between Immersion Program and Internship Program
    if (formType === "immersion-program" || formType === "internship-program") {
      // References
      formData.firstReferenceName = fetchedData?.references[0]?.name || "";
      formData.firstReferencePosition = fetchedData?.references[0]?.position || "";
      formData.firstReferenceOrg = fetchedData?.references[0]?.organization || "";
      formData.firstReferenceAddress = fetchedData?.references[0]?.address || "";
      formData.firstReferenceTel = fetchedData?.references[0]?.telephone || "";
      formData.firstReferenceEmail = fetchedData?.references[0]?.email || "";

      formData.secondReferenceName = fetchedData?.references[1]?.name || "";
      formData.secondReferencePosition = fetchedData?.references[1]?.position || "";
      formData.secondReferenceOrg = fetchedData?.references[1]?.organization || "";
      formData.secondReferenceAddress = fetchedData?.references[1]?.address || "";
      formData.secondReferenceTel = fetchedData?.references[1]?.telephone || "";
      formData.secondReferenceEmail = fetchedData?.references[1]?.email || "";
    }

    return formData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = process.env.baseUrl;

      await fetch(`${baseUrl + endpoint}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          // in case the api does not provide all the input field values that were empty we bind it with the default values using the spread operator
          // So that values that are not available form the api is initialized with an empty string or array or whatever the type of that input field is
          const formattedData = formatData(data);
          setData(formattedData);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [endpoint]);

  return [data];
};

export default useDraftData;
