import React, { useState } from "react";
import { useForm } from "react-hook-form";

// COMPONENTS
import HeroBannerSmall from "../../Shared/HeroBannerSmall/HeroBannerSmall";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import ButtonLight from "../../Shared/Button/Button";

// Data
import orgData from "./data/checkboxOrgData.json";

// CSS
import styles from "./ExposureVisitForm.module.scss";
import { appendChildTo, isChecked } from "../utilityFunctions/formDataChecks";

const ExposureVisitForm = () => {
  // Style ClassName
  const {
    exposureForm,
    exposureFormHeader,
    exposureFormBody,
    personalInfoContainer,
    headingContainer,
    purposeBox,
    familyNameBox,
    firstNameBox,
    dobBox,
    durationBox,
    startDateBox,
    nationalityBox,
    genderBox,
    imageFileBox,
    passportNumberBox,
    mailingAddBox,
    telephoneNoBox,
    residenceBox,
    mobilePhoneBox,
    emailBox,
    box,
    educationInfoContainer,
    institutionHeading,
    institutionField,
    periodHeading,
    periodFromHeading,
    periodFromField,
    periodToHeading,
    periodToField,
    majorHeading,
    majorField,
    qualificationHeading,
    qualificationField,
    addMoreButton,
    buttonComponent,
    employmentStatusContainer,
    orgField,
    orgHeader,
    desigHeader,
    desigField,
    sinceHeader,
    sinceField,
    responHeader,
    responField,
    questionOne,
    ansOne,
    questionTwo,
    ansTwo,
    questionThree,
    ansThree,
    questionFour,
    ansFour,
    questionFive,
    ansFive,
    emergencyContactContainer,
    firstContactName,
    firstContactAddress,
    firstContactTel,
    firstContactBusinessName,
    firstContactBusinessAddress,
    firstContactBusinessTel,
    firstContactRelation,
    secondContactName,
    secondContactAddress,
    secondContactTel,
    secondContactBusinessName,
    secondContactBusinessAddress,
    secondContactBusinessTel,
    secondContactRelation,
    checkboxContainer,
    gridBox,
    optionContainer,
    btnContainer,
    imageFileBtn,
    imageContainer,
  } = styles;

  // State Variables
  // state variable for program-source to control checkbox input
  const [source, setSource] = useState([0, 0, 0, 0]);
  const [orgCount, setOrgCount] = useState(0);

  //   useForm API
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    required,
  } = useForm({
    defaultValues: {
      purpose: "",
      familyName: "",
      firstName: "",
      dob: "",
      duration: "",
      startDate: "",
      nationality: "",
      gender: "",
      passportNumber: "",
      imageFile: "",
      mailingAdd: "",
      telephoneNo: "",
      residence: "",
      mobilePhone: "",
      email: "",
      institutionName: "",
      institutionFrom: "",
      institutionTo: "",
      major: "",
      qualification: "",
      orgName: "",
      designation: "",
      since: "",
      responsibility: "",
      profGoal: "",
      futureSocialBusiness: "",
      organization: [],
      participateGrameenOrg: "",
      sourceCampus: "",
      sourceRef: "",
      sourceYunus: "",
      sourceOthers: "",
      firstContactName: "",
      firstContactAddress: "",
      firstContactTel: "",
      firstContactBusinessName: "",
      firstContactBusinessAddress: "",
      firstContactBusinessTel: "",
      firstContactRelation: "",
      secondContactName: "",
      secondContactAddress: "",
      secondContactTel: "",
      secondContactBusinessName: "",
      secondContactBusinessAddress: "",
      secondContactBusinessTel: "",
      secondContactRelation: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data.imageFile[0]);
    let formdata = new FormData();

    formdata.append("purpose_of_visit", data.purpose);
    formdata.append("family_name", data.familyName);
    formdata.append("first_name", data.firstName);
    formdata.append("date_of_birth", data.dob);
    formdata.append("expected_duration", data.duration);
    formdata.append("start_date", data.startDate);
    formdata.append("nationality", data.nationality);
    formdata.append("gender", data.gender);
    formdata.append("passport_no", data.passportNumber);
    formdata.append("photo", data.imageFile[0]);
    formdata.append("mailing_address", data.mailingAdd);
    formdata.append("telephone_mobile", data.mobilePhone);
    formdata.append("telephone_residence", data.telephoneNo);
    formdata.append("email", data.email);
    formdata.append("education[0][institution]", data.institutionName);
    formdata.append("education[0][period_from]", data.institutionFrom);
    formdata.append("education[0][period_to]", data.institutionTo);
    formdata.append("education[0][major]", data.major);
    formdata.append("education[0][qualification]", data.qualification);
    formdata.append("current_employment[0][organization]", data.orgName);
    formdata.append("current_employment[0][designation]", data.designation);
    formdata.append("current_employment[0][since]", data.since);
    formdata.append("current_employment[0][responsibilities]", data.responsibility);
    formdata.append("visit_prof_goal", data.profGoal);
    formdata.append("future_of_sb", data.futureSocialBusiness);
    formdata.append("grameen_org_to_meet", data.organization);
    formdata.append("source_of_learning[0][campus]", data.sourceCampus);
    formdata.append("source_of_learning[0][reference]", data.sourceRef);
    formdata.append("source_of_learning[0][yc_website]", data.sourceYunus);
    formdata.append("source_of_learning[0][others]", data.sourceOthers);
    formdata.append("emmergency_contacts[0][name]", data.firstContactName);
    formdata.append("emmergency_contacts[0][address]", data.firstContactAddress);
    formdata.append("emmergency_contacts[0][telephone]", data.firstContactTel);
    formdata.append("emmergency_contacts[0][business_name]", data.firstContactBusinessName);
    formdata.append("emmergency_contacts[0][business_address]", data.firstContactBusinessAddress);
    formdata.append("emmergency_contacts[0][business_telephone]", data.firstContactBusinessTel);
    formdata.append("emmergency_contacts[0][relation_to_applicant]", data.firstContactRelation);

    await fetch("https://ycadmin.yyventures.org/api/exposure-visit-application", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.status)
      .then((status) => console.log(status))
      .catch((err) => err);
  };

  return (
    <div className={exposureForm}>
      <div className={exposureFormHeader}>
        <HeroBannerSmall title="Exposure Visit Form" />
      </div>
      <div className={`${exposureFormBody} container-layout`}>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          {/* PERSONAL INFORMATION */}

          <div className={personalInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Apply at-least 1 months before start date; Facilitation Fee $50 for a week</p>
            </div>

            <div className={`${purposeBox} ${box}`}>
              <label htmlFor="purpose">Purpose of Visit</label>
              <input id="purpose" type="text" {...register("purpose", { required: true, max: 5 })} />
              {errors.purpose?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
              {errors.purpose?.type === "max" && <FormErrorMessage msg="Must be shorter than 5 characters" />}
            </div>

            <div className={`${familyNameBox} ${box}`}>
              <label htmlFor="familyName">Family Name</label>
              <input id="familyName" type="text" {...register("familyName", { required: true })} />
              {errors.familyName?.type === "required" && <FormErrorMessage msg="Family Name Required" />}
            </div>

            <div className={`${firstNameBox} ${box}`}>
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" {...register("firstName", { required: true })} />
              {errors.firstName?.type === "required" && <FormErrorMessage msg="First Name Required" />}
            </div>

            <div className={`${dobBox} ${box}`}>
              <label htmlFor="dob">Date of Birth</label>
              <input id="dob" type="date" {...register("dob", { required: true })} />
              {errors.dob?.type === "required" && <FormErrorMessage msg="Date of birth is required" />}
            </div>

            <div className={`${durationBox} ${box}`}>
              <label htmlFor="duration">Expected Duration</label>
              <input id="duration" type="number" {...register("duration", { required: true })} />
              {errors.duration?.type === "required" && <FormErrorMessage msg="Expected duration cannot be empty" />}
            </div>

            <div className={`${startDateBox} ${box}`}>
              <label htmlFor="startDate">Start Date</label>
              <input id="startDate" type="date" {...register("startDate", { required: true })} />
              {errors.startDate?.type === "required" && <FormErrorMessage msg="Start Date is required" />}
            </div>

            <div className={`${nationalityBox} ${box}`}>
              <label htmlFor="nationality">Nationality</label>
              <input id="nationality" type="text" {...register("nationality", { required: true })} />
              {errors.nationality?.type === "required" && <FormErrorMessage msg="Nationality Required" />}
            </div>
            <div className={`${genderBox} ${box}`}>
              <label htmlFor="gender">Gender</label>
              <select {...register("gender", { required: true })}>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
            </div>

            <div className={`${passportNumberBox} ${box}`}>
              <label htmlFor="passportNumber">Passport Number</label>
              <input id="passportNumber" type="text" {...register("passportNumber", { required: true })} />
              {errors.passportNumber?.type === "required" && <FormErrorMessage msg="Passport No. Required" />}
            </div>
            <div className={`${imageFileBox} ${box}`}>
              <div className={imageContainer}>
                <p>Recent Photo</p>
                <p>(Within 3 months)</p>
              </div>
              <input
                id="imageFile"
                className={imageFileBtn}
                type="file"
                {...register("imageFile", { required: true })}
              />
              {errors.imageFile?.type === "required" && <FormErrorMessage msg="Please Upload an Image" />}
            </div>
            <div className={`${mailingAddBox} ${box}`}>
              <label htmlFor="mailingAdd">Mailing Address</label>
              <input id="mailingAdd" type="text" {...register("mailingAdd")} />
              {/* {errors.mailingAdd?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            {/* <div className={`${telephoneNoBox} ${box}`}>
              <label htmlFor="telephoneNo">Telephone No.</label>
            <input
                id="telephoneNo"
                type="tel"
                {...register(
                  "telephoneNo",

                  {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  }
                )}
              />
            </div> */}
            <div className={`${residenceBox} ${box}`}>
              <label htmlFor="residence">Telephone (Residence)</label>
              <input
                id="telephoneNo"
                type="tel"
                {...register(
                  "telephoneNo",

                  {
                    required: true,
                    pattern: /^[0-9]+$/i,
                  }
                )}
              />
              {errors.telephoneNo?.type === "pattern" && <FormErrorMessage msg="invalid number" />}
              {errors.telephoneNo?.type === "required" && <FormErrorMessage msg="Telephone no. is required" />}
              {/* {errors.residence?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${mobilePhoneBox} ${box}`}>
              <label htmlFor="mobilePhone">Mobile Phone</label>
              <input
                id="mobilePhone"
                type="text"
                {...register("mobilePhone", {
                  required: true,
                  pattern: /^[0-9]{3,14}$/i,
                })}
              />
              {errors.mobilePhone?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
              {errors.mobilePhone?.type === "pattern" && <FormErrorMessage msg="Please enter a valid mobile number" />}
            </div>
            <div className={`${emailBox} ${box}`}>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="text"
                {...register("email", { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i })}
              />
              {errors.email?.type === "required" && <FormErrorMessage msg="Field can not be empty" />}
              {errors.email?.type === "pattern" && <FormErrorMessage msg="Please Provide a valid email address" />}
            </div>
          </div>

          {/* EDUCATION STATUS */}

          <div id="education-status" className={educationInfoContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Education (in chronological order)</p>
            </div>
            <div className={`${institutionHeading} ${box}`}>
              <p>School, College, University, Etc. Attended / Attending</p>
            </div>
            <div id="education-status-field" className={`${institutionField} ${box}`}>
              <input type="text" {...register("institutionName")} />
            </div>
            <div className={`${periodHeading} ${box}`}>
              <p>Period</p>
            </div>
            <div className={`${periodFromHeading} ${box}`}>
              <p>From (month/year)</p>
            </div>
            <div id="education-status-field" className={`${periodFromField} ${box}`}>
              <input type="date" {...register("institutionFrom")} />
            </div>
            <div className={`${periodToHeading} ${box}`}>
              <p>To (month/year)</p>
            </div>
            <div id="education-status-field" className={`${periodToField} ${box}`}>
              <input type="date" {...register("institutionTo")} />
            </div>
            <div className={`${majorHeading} ${box}`}>
              <p>Major</p>
            </div>
            <div id="education-status-field" className={`${majorField} ${box}`}>
              <select {...register("major")}>
                <option value="CSE">CSE</option>
                <option value="EEE">EEE</option>
                <option value="BBA">BBA</option>
              </select>
            </div>
            <div className={`${qualificationHeading} ${box}`}>
              <p>Qualification Obtained/ to be obtained</p>
            </div>
            <div id="education-status-field" className={`${qualificationField} ${box}`}>
              <input type="text" {...register("qualification")} />
            </div>

            <div className={`${addMoreButton} ${box}`}>
              <div
                className={buttonComponent}
                onClick={() => {
                  appendChildTo();
                }}
              >
                <ButtonLight type="button" text="Add More" />
              </div>
            </div>
          </div>

          {/* CURRENT EMPLOYMENT STATUS */}

          <div className={employmentStatusContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Current Employment Status</p>
            </div>
            <div className={`${orgHeader} ${box}`}>
              <p>Name of Organization</p>
            </div>
            <div className={`${orgField} ${box}`}>
              <input type="text" {...register("orgName")} />
              {/* {errors.orgName?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${desigHeader} ${box}`}>
              <p>Designation</p>
            </div>
            <div className={`${desigField} ${box}`}>
              <input type="text" {...register("designation")} />
              {/* {errors.designation?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${sinceHeader} ${box}`}>
              <p>Since</p>
            </div>
            <div className={`${sinceField} ${box}`}>
              <select {...register("since")}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              {/* {errors.since?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${responHeader} ${box}`}>
              <p>Responsibilities</p>
            </div>
            <div className={`${responField} ${box}`}>
              <input type="text" {...register("responsibility")} />
              {/* {errors.responsibility?.type === "required" && (
                <FormErrorMessage msg="Field can not be empty" />
              )} */}
            </div>
            <div className={`${questionOne} ${box}`}>
              <p>How will an exposure visit at the Yunus Centre apply to your professional goals?</p>
            </div>
            <div className={`${ansOne} ${box}`}>
              <textarea {...register("profGoal", { required: true, maxLength: 250 })} />
            </div>
            <div className={`${questionTwo} ${box}`}>
              <p>What does the future of Social Business look like to you?</p>
            </div>
            <div className={`${ansTwo} ${box}`}>
              <textarea {...register("futureSocialBusiness", { required: true, maxLength: 250 })} />
            </div>
            <div className={`${questionThree} ${box}`}>
              <p>Tick (√) five or less Grameen Organizations you would like to meet during your time here?</p>
            </div>
            <div className={`${ansThree} ${box}`}>
              {orgData.map((data) => {
                return (
                  <div key={data.id} className={checkboxContainer}>
                    <input
                      type="checkbox"
                      id={data.id}
                      {...register("organization")}
                      value={data.organization}
                      onChange={(e) => e.target.checked && setOrgCount((prev) => prev + 1)}
                    />
                    <label htmlFor={data.id}>{data.organization}</label>
                  </div>
                );
              })}
            </div>
            <div className={`${questionFour} ${box}`}>
              <p>Did you participate in any field trip with any Grameen organization before?</p>
              <p>If yes, please specify the organization, the date and duration?</p>
            </div>
            <div className={`${ansFour} ${box}`}>
              <textarea {...register("participateGrameenOrg", { required: true, maxLength: 250 })} />
            </div>
            <div className={`${questionFive} ${box}`}>
              <p>Where did you learn about the program (Please tick √ as appropriate)</p>
            </div>
            <div id="program-source" className={`${ansFive} ${box}`}>
              {/* option 1 */}
              <div className={optionContainer}>
                <input
                  type="checkbox"
                  id="sourceCampus"
                  value="Campus"
                  onChange={() => setSource([!source[0], 0, 0, 0])}
                  checked={source[0]}
                />
                <label htmlFor="sourceCampus">Campus (Specify)</label>
                <input type="text" {...register("sourceCampus")} disabled={!source[0]} />
              </div>
              {/* option 2 */}
              <div className={optionContainer}>
                <input
                  type="checkbox"
                  id="sourceRef"
                  value="Reference"
                  onChange={() => setSource([0, !source[1], 0, 0])}
                  checked={source[1]}
                />
                <label htmlFor="sourceRef">Referred by (Specify)</label>
                <input type="text" {...register("sourceRef")} disabled={!source[1]} />
              </div>
              {/* option 3 */}
              <div className={optionContainer}>
                <input
                  type="checkbox"
                  id="sourceYunus"
                  value="Website"
                  onChange={() => setSource([0, 0, !source[2], 0])}
                  checked={source[2]}
                />
                <label htmlFor="sourceYunus">Yunus Centre Website</label>
                <input type="text" {...register("sourceYunus")} disabled={!source[2]} />
              </div>
              {/* option 4 */}
              <div className={optionContainer}>
                <input
                  type="checkbox"
                  id="sourceOther"
                  value="Others"
                  onChange={() => setSource([0, 0, 0, !source[3]])}
                  checked={source[3]}
                />
                <label htmlFor="sourceOther">Others (Specify)</label>
                <input type="text" {...register("sourceOthers")} disabled={!source[3]} />
              </div>
            </div>
          </div>

          {/* EMERGENCY CONTACTS */}

          <div className={emergencyContactContainer}>
            <div className={`${headingContainer} ${box}`}>
              <p>Emergency Contacts</p>
            </div>
            {/* First Contact */}
            <div className={`${firstContactName} ${box}`}>
              <label htmlFor="firstContactName">
                Name of <b>First</b> Contact
              </label>
              <input id="firstContactName" type="text" {...register("firstContactName")} />
            </div>
            <div className={`${firstContactAddress} ${box}`}>
              <label htmlFor="firstContactAddress">Address</label>
              <input id="firstContactAddress" type="text" {...register("firstContactAddress")} />
            </div>
            <div className={`${firstContactTel} ${box}`}>
              <label htmlFor="firstContactTel">Telephone</label>
              <input id="firstContactTel" type="tel" {...register("firstContactTel")} />
            </div>
            <div className={`${firstContactBusinessName} ${box}`}>
              <label htmlFor="firstContactBusinessName">Business Name</label>
              <input id="firstContactBusinessName" type="text" {...register("firstContactBusinessName")} />
            </div>
            <div className={`${firstContactBusinessAddress} ${box}`}>
              <label htmlFor="firstContactBusinessAddress">Business Address</label>
              <input id="firstContactBusinessAddress" type="text" {...register("firstContactBusinessAddress")} />
            </div>
            <div className={`${firstContactBusinessTel} ${box}`}>
              <label htmlFor="firstContactBusinessTel">Telephone</label>
              <input id="firstContactBusinessTel" type="tel" {...register("firstContactBusinessTel")} />
            </div>
            <div className={`${firstContactRelation} ${box}`}>
              <label htmlFor="firstContactRelation">Relation to Applicant</label>
              <input id="firstContactRelation" type="text" {...register("firstContactRelation")} />
            </div>

            {/* Second Contact */}
            <div className={`${secondContactName} ${box}`}>
              <label htmlFor="secondContactName">
                Name of <b>second</b> Contact
              </label>
              <input id="secondContactName" type="text" {...register("secondContactName")} />
            </div>
            <div className={`${secondContactAddress} ${box}`}>
              <label htmlFor="secondContactAddress">Address</label>
              <input id="secondContactAddress" type="text" {...register("secondContactAddress")} />
            </div>
            <div className={`${secondContactTel} ${box}`}>
              <label htmlFor="secondContactTel">Telephone</label>
              <input id="secondContactTel" type="tel" {...register("secondContactTel")} />
            </div>
            <div className={`${secondContactBusinessName} ${box}`}>
              <label htmlFor="secondContactBusinessName">Business Name</label>
              <input id="secondContactBusinessName" type="text" {...register("secondContactBusinessName")} />
            </div>
            <div className={`${secondContactBusinessAddress} ${box}`}>
              <label htmlFor="secondContactBusinessAddress">Business Address</label>
              <input id="secondContactBusinessAddress" type="text" {...register("secondContactBusinessAddress")} />
            </div>
            <div className={`${secondContactBusinessTel} ${box}`}>
              <label htmlFor="secondContactBusinessTel">Telephone</label>
              <input id="secondContactBusinessTel" type="tel" {...register("secondContactBusinessTel")} />
            </div>
            <div className={`${secondContactRelation} ${box}`}>
              <label htmlFor="secondContactRelation">Relation to Applicant</label>
              <input id="secondContactRelation" type="text" {...register("secondContactRelation")} />
            </div>
          </div>
          <div className={btnContainer}>
            <ButtonLight text="Submit" type="submit" dark />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExposureVisitForm;
