# Forum for diabetes
# Informations
Forum is provided for people with diabetes diseases. Contains all the information you need to know about diabetes like basics, equipment, nutrition, daily life, complications, helplines and more.
Application provides REST API that may be used to log in or register users account with JSON Web Token.
Also I added here a simple Mobile App written in Kotlin where user can add or delete daily sugar measurements.

| Role | User | Admin |
| :---         |     :---:      | ---: |
| E-mail   |test@user.com|test@admin.com|
| Password     |testuser|testadmin  

# Technologies
• Java 17

• Spring Boot 5

• Spring Security 5

• PostgreSQL

• Tomcat

• JWT Token

• Maven

• IntelliJ IDEA

• Hibernate

• Spring Data JPA

• DevTools

• Lombok

• H2

• Jettison

# Features 
### Diabetes
• Basics of diabetes | Good eating habits | Daily life with diabetes
### Equipment
• Types of glucometers | Types of insulin strips | Types of insulin needles
### Advices
• How to live with diabetes | Diabetes complications | Diabetes first aid kit | Diabetic depression
### More
• Interesting facts | Diabetes helplines
### Practical tools
• Food converters | Diabetic calculator
### Others
• Private Routes | Log In and Registration system | RWD | Dynamic components

# Back-end structure

```bash

|-- src
   |   |-- main
   |   |   |-- java
   |   |   |   |-- com
   |   |   |   |   |-- maciejklonicki
   |   |   |   |   |   |-- org
   |   |   |   |   |   |   |-- backend
   |   |   |   |   |   |   |   |-- BackendApplication.java
   |   |   |   |   |   |   |   |-- config
   |   |   |   |   |   |   |   |   |-- JwtTokenConfigurer.java
   |   |   |   |   |   |   |   |   |-- JwtTokenFilter.java
   |   |   |   |   |   |   |   |   |-- JwtTokenProvider.java
   |   |   |   |   |   |   |   |   |-- SpringSecurityConfig.java
   |   |   |   |   |   |   |   |-- controller
   |   |   |   |   |   |   |   |   |-- UserController.java
   |   |   |   |   |   |   |   |   |-- UserResourceImpl.java
   |   |   |   |   |   |   |   |-- model
   |   |   |   |   |   |   |   |   |-- Role.java
   |   |   |   |   |   |   |   |   |-- Users.java
   |   |   |   |   |   |   |   |-- repository
   |   |   |   |   |   |   |   |   |-- RoleRepository.java
   |   |   |   |   |   |   |   |   |-- UserRepository.java
   |   |   |   |   |   |   |   |-- service
   |   |   |   |   |   |   |   |   |-- RoleService.java
   |   |   |   |   |   |   |   |   |-- UserDetailServiceImpl.java
   |   |   |   |   |   |   |   |   |-- UserService.java
   |   |   |   |   |   |   |   |-- utils
   |   |   |   |   |   |   |   |   |-- ConstantUtils.java
   |   |   |-- resources
   |   |   |   |-- application.properties
   |   |-- test
   |   |   |-- java
   |   |   |   |-- com
   |   |   |   |   |-- maciejklonicki
   |   |   |   |   |   |-- org
   |   |   |   |   |   |   |-- backend
   |   |   |   |   |   |   |   |-- BackendApplicationTests.java
   |   |   |   |   |   |   |   |-- controller
   |   |   |   |   |   |   |   |   |-- UserControllerTest.java
   |   |   |   |   |   |   |   |-- repository
   |   |   |   |   |   |   |   |   |-- RoleRepositoryTest.java
   |   |   |   |   |   |   |   |   |-- UserRepositoryTest.java
   |   |   |   |   |   |   |   |-- service
   |   |   |   |   |   |   |   |   |-- RoleServiceTest.java
   |   |   |   |   |   |   |   |   |-- UserDetailServiceImplTest.java
   |   |   |   |   |   |   |   |   |-- UserServiceTest.java
   |   |   |-- resources
   |   |   |   |-- application.properties


```

# Front-end structure

```bash
 |   |-- components
   |   |   |-- AboutDiabetes
   |   |   |   |-- Basics.css
   |   |   |   |-- Basics.js
   |   |   |   |-- Daily.css
   |   |   |   |-- Daily.js
   |   |   |   |-- Nutrition.css
   |   |   |   |-- Nutrition.js
   |   |   |-- Advices
   |   |   |   |-- Complications.js
   |   |   |   |-- Depression.css
   |   |   |   |-- Depression.js
   |   |   |   |-- FirstAidKit.css
   |   |   |   |-- FirstAidKit.js
   |   |   |   |-- HowTo.css
   |   |   |   |-- HowTo.js
   |   |   |-- Email
   |   |   |   |-- Contact.css
   |   |   |   |-- Contact.js
   |   |   |-- Equipment
   |   |   |   |-- Glucometers.css
   |   |   |   |-- Glucometers.js
   |   |   |   |-- Needles.css
   |   |   |   |-- Needles.js
   |   |   |   |-- Stripes.css
   |   |   |   |-- Stripes.js
   |   |   |-- FooterComp.css
   |   |   |-- FooterComp.js
   |   |   |-- HeaderComp.css
   |   |   |-- HeaderComp.js
   |   |   |-- Home
   |   |   |   |-- Body.css
   |   |   |   |-- Body.js
   |   |   |   |-- Calculator.css
   |   |   |   |-- Calculator.js
   |   |   |   |-- Converters.css
   |   |   |   |-- Converters.js
   |   |   |   |-- Informations.css
   |   |   |   |-- Informations.js
   |   |   |   |-- index.js
   |   |   |-- More
   |   |   |   |-- Curiosities.css
   |   |   |   |-- Curiosities.js
   |   |   |   |-- Infoline.css
   |   |   |   |-- Infoline.js
   |   |   |-- PrivateRoute.js
   |   |   |-- SlideMenu
   |   |   |   |-- AboutDiabetes.js
   |   |   |   |-- Advices.js
   |   |   |   |-- Medicaments.js
   |   |   |   |-- More.js
   |   |   |   |-- MoveDownAdvices.css
   |   |   |   |-- MoveDownAdvices.js
   |   |   |   |-- MoveDownDiabetes.css
   |   |   |   |-- MoveDownDiabetes.js
   |   |   |   |-- MoveDownMedicaments.css
   |   |   |   |-- MoveDownMedicaments.js
   |   |   |   |-- MoveDownMore.css
   |   |   |   |-- MoveDownMore.js
   |   |   |-- User
   |   |   |   |-- Login.js
   |   |   |   |-- Register.js
   |   |   |   |-- RegisterAlert.js
   |   |   |   |-- RegistrationAlert.css
   |   |   |-- services
   |   |   |   |-- index.js
   |   |   |   |-- rootReducer.js
   |   |   |   |-- store.js
   |   |   |   |-- user
   |   |   |   |   |-- auth
   |   |   |   |   |   |-- authActions.js
   |   |   |   |   |   |-- authReducer.js
   |   |   |   |   |   |-- authTypes.js
   |   |   |   |   |-- userActions.js
   |   |   |   |   |-- userReducer.js
   |   |   |   |   |-- userTypes.js
```

# Mobile App structure

```bash

MobileApp
   |-- .gitignore
   |-- .idea
   |   |-- .gitignore
   |   |-- .name
   |   |-- compiler.xml
   |   |-- deploymentTargetDropDown.xml
   |   |-- gradle.xml
   |   |-- misc.xml
   |   |-- vcs.xml
   |-- app
   |   |-- .gitignore
   |   |-- build.gradle
   |   |-- proguard-rules.pro
   |   |-- src
   |   |   |-- androidTest
   |   |   |   |-- java
   |   |   |   |   |-- com
   |   |   |   |   |   |-- example
   |   |   |   |   |   |   |-- diabetesmobileapp
   |   |   |   |   |   |   |   |-- ExampleInstrumentedTest.kt
   |   |   |-- main
   |   |   |   |-- AndroidManifest.xml
   |   |   |   |-- java
   |   |   |   |   |-- com
   |   |   |   |   |   |-- example
   |   |   |   |   |   |   |-- diabetesmobileapp
   |   |   |   |   |   |   |   |-- DiabetesMobileApp.kt
   |   |   |   |   |   |   |   |-- MainActivity.kt
   |   |   |   |   |   |   |   |-- MobileAppAdapter.kt
   |   |   |   |-- res
   |   |   |   |   |-- drawable-v24
   |   |   |   |   |   |-- ic_launcher_foreground.xml
   |   |   |   |   |-- drawable
   |   |   |   |   |   |-- ic_launcher_background.xml
   |   |   |   |   |-- layout
   |   |   |   |   |   |-- activity_main.xml
   |   |   |   |   |   |-- item_diabetesmobileapp.xml
   |   |   |   |   |-- mipmap-anydpi-v26
   |   |   |   |   |   |-- ic_launcher.xml
   |   |   |   |   |   |-- ic_launcher_round.xml
   |   |   |   |   |-- mipmap-hdpi
   |   |   |   |   |   |-- ic_launcher.webp
   |   |   |   |   |   |-- ic_launcher_round.webp
   |   |   |   |   |-- mipmap-mdpi
   |   |   |   |   |   |-- ic_launcher.webp
   |   |   |   |   |   |-- ic_launcher_round.webp
   |   |   |   |   |-- mipmap-xhdpi
   |   |   |   |   |   |-- ic_launcher.webp
   |   |   |   |   |   |-- ic_launcher_round.webp
   |   |   |   |   |-- mipmap-xxhdpi
   |   |   |   |   |   |-- ic_launcher.webp
   |   |   |   |   |   |-- ic_launcher_round.webp
   |   |   |   |   |-- mipmap-xxxhdpi
   |   |   |   |   |   |-- ic_launcher.webp
   |   |   |   |   |   |-- ic_launcher_round.webp
   |   |   |   |   |-- values-night
   |   |   |   |   |   |-- themes.xml
   |   |   |   |   |-- values
   |   |   |   |   |   |-- colors.xml
   |   |   |   |   |   |-- strings.xml
   |   |   |   |   |   |-- themes.xml
   |   |   |   |   |-- xml
   |   |   |   |   |   |-- backup_rules.xml
   |   |   |   |   |   |-- data_extraction_rules.xml
   |   |   |-- test
   |   |   |   |-- java
   |   |   |   |   |-- com
   |   |   |   |   |   |-- example
   |   |   |   |   |   |   |-- diabetesmobileapp
   |   |   |   |   |   |   |   |-- ExampleUnitTest.kt
   |-- build.gradle
   |-- gradle.properties
   |-- gradle
   |   |-- wrapper
   |   |   |-- gradle-wrapper.jar
   |   |   |-- gradle-wrapper.properties
   |-- gradlew
   |-- gradlew.bat
   |-- settings.gradle
README.md


```

# Screenshots

### Main page (not logged in)
![image](https://user-images.githubusercontent.com/82573905/200570217-617530db-608d-4d3b-9f1e-35d8a6d426f2.png)
### Login and Registration froms
![image](https://user-images.githubusercontent.com/82573905/200570388-0c61e5d6-16b3-4cea-82bb-03d96e12c5cd.png)
![image](https://user-images.githubusercontent.com/82573905/200570491-569c5c9e-619c-41c2-b286-3b6a9421512a.png)
### Main page (after successful login)
![image](https://user-images.githubusercontent.com/82573905/200570665-b268a617-3dc5-4a03-b069-5f02f1ede36f.png)
### Other pages
![image](https://user-images.githubusercontent.com/82573905/200570784-b662ed1a-3591-4fc5-bf72-25f114fbeda9.png)

![image](https://user-images.githubusercontent.com/82573905/200570846-76253535-c0e4-4c2f-a8f5-dcf38a5f81eb.png)

![image](https://user-images.githubusercontent.com/82573905/200570897-8d114db9-21e2-4a1f-adde-9c46dd33cf1d.png)

![image](https://user-images.githubusercontent.com/82573905/200570972-6f6ace9b-15af-47e5-9820-ec38729fe4f6.png)

![image](https://user-images.githubusercontent.com/82573905/200571018-ace7bdbf-8a98-4dae-9bb2-f69d8cecc1b2.png)

![image](https://user-images.githubusercontent.com/82573905/200571145-74b9ec45-385b-4c3f-b82e-0d42ae4e1587.png)




