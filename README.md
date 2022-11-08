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

