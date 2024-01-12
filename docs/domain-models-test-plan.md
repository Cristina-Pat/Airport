# Domain Models and Test Plan

### Functional Requirements -> User Stories -> Domain Models

**Core Functional Requirements**

**FR1**\
A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time. This capacity should have the ability to be overridden as appropriate

*User Story - US1*\
As an airport manager, I can change the maximum number of planes available in the airport do that I can adapt the slots as appropriate.

*Domain Model - DM1*
| Objects | Properties | Messages | Outputs |
| --- | ---| --- | --- |
| Airport | airportCapacity@Integer | changeAirportCapacityTo(@Integer) | @Void | 


**FR2**\
Air Traffic Controllers need to be able to instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport

*User story - US2*\
As a traffic controller in the airport, I want to be able to instruct a plane to land at an airport if the airport is not full and the the plane is not already at the airport, so there are no errors.

*Domain Model - DM2*
| Objects | Properties | Messages | Outputs |
| --- | ---| --- | --- |
| Airport | airport @Array[@Planes] | isFull()| @Boolean   |
| Airport | airport @Array[@Planes]  | atAirport(@Plane)   | @Boolean - False|
| Plane   | id @String               | getId()             | @String | 

**FR3**\
Air Traffic Controllers need to be able to instruct a plane to take off from an airport as long as it is currently at the airport.

*User Story - US3*\
As a traffic controller in the airport, I want to be able to instruct a plane to take off from the airport if the plane is currently at the airport, so there are no errors.

*Domain Model - DM3*
| Objects | Properties | Messages | Outputs |
| --- | ---| --- | --- |
| Airport | airport @Array[@Planes] | takeOffPlane(@Plane)| @Void   |
| Airport | airport @Array[@Planes]  | atAirport(@Plane)   | @Boolean - True|
| Plane   | id @String               | getId()             | @String |

**Additional Functional Requirements**

**FR4**
Planes must not be able to land if the weather is stormy

**FR5**
Planes must not be able to take off if the weather is stormy