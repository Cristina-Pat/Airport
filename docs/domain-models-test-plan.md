# Domain Models and Test Plan

## Presentation for Client ##
**Problem:**\
The software is designed to address challenges in airport management, specifically related to coordinating and ensuring safe operations during varying weather conditions.

**Benefits of using the airport management software:** 

*Operational Efficiency*\
 The capacity management features allow the client to optimize the usage of the airport's resources. The software can prevent unnecessary landings or takeoffs when the airport is full or in adverse weather conditions. This leads to efficient resource allocation, reducing congestion, and improving overall operational efficiency.

*Enhanced Safety*\
 The software prevents planes from landing or taking off in stormy weather, prioritizing safety for both passengers and planes. This feature significantly reduces the risk of incidents caused by adverse weather conditions.


*Scalability and Adaptability*\
 The software's modular structure, with the inclusion of a *Weather* class and clear separation of concerns, makes it adaptable to changing requirements.


**Risks associated with using the airport management software:**

*System Downtime and Updates*\
 Like any software, there is a risk of system downtime or disruptions during updates or maintenance. Proper planning and communication are crucial to minimize the impact of these potential disruptions on airport operations. 
 For mitigating this risk, deployment in the Cloud across multiple Availability Zones might be considered.

*System Configuration* \
The configuration of the airport's capacity is directly controlled by external input through the *setCapacity* method. There is a risk that incorrect or unexpected values could be set, leading to an airport operating beyond its intended capacity. This might result in overloading and negatively impact the system's performance.

*Weather Dependency Risk* \
The software heavily relies on the *Weather* class to make critical decisions about plane landings and take-offs. If there are issues or inaccuracies in the weather information provided by the *Weather* class, it may lead to incorrect decisions, potentially causing disruptions in airport operations.

*User Adoption and Training*\
 Introducing new software requires user adoption and training. If air traffic controllers, pilots, and airport administrators are not adequately trained or if there is resistance to change, it could impact the successful implementation and utilization of the system.

### Functional Requirements -> User Stories -> Domain Models -> Tests

**Core Functional Requirements**

**FR1**\
A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time. This capacity should have the ability to be overridden as appropriate

*User Story - US1*\
As an airport manager, I can change the maximum number of planes available in the airport so that I can adapt the slots as appropriate.

*Domain Model - DM1*
| Objects | Properties | Messages | Outputs |
| --- | ---| --- | --- |
| Airport | airportCapacity@Integer | setCapacity(@Integer) | @Integer|
| Airport | airportCapacity@Integer | getCapacity(@Integer) | @Integer|  

*Unit Tests*\
Test 1 - The maximum capacity of the airport changes when setCapacity(@integer) is called. Calling getCapacity() will return the same value that was given to setCapacity.


**FR2**\
Air Traffic Controllers need to be able to instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport

*User story - US2*\
As a traffic controller in the airport, I want to be able to instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport, so there are no errors.

*Domain Model - DM2*
| Objects | Properties | Messages | Outputs |
| --- | ---| --- | --- |
| Airport | id @String              | getId()              | @String |
| Plane   | id @String              | getId()              | @String | 
| Airport | airport @Array[@Planes] | isFull()             | @Boolean   |
| Airport | airport @Array[@Planes] | atAirport(@Plane)    | @Boolean |
| Plane   | id @String              | instructToLand(@Airport)| @Boolean|

*Unit Tests*\
Test 1 - A plane can be instructed to land at an airport if both the isFull() and atAirport(@plane) functions of the airport are non-true.

Test 2 - A plane can't be instructed to land at an airport if the airport is full (isFull() -> True) and the plane is not at that airport (atAirport(@plane) -> False).

Test 3 -  A plane can't be instructed to land at an airport if the airport is not full (isFull() -> True) but the plane is at that airport (atAirport(@plane) -> True).

Test 4 - A plane can't be instructed to land at an airport if the airport is full (isFull() -> True) and the plane is at that airport (atAirport(@plane) -> True).


**FR3**\
Air Traffic Controllers need to be able to instruct a plane to take off from an airport as long as it is currently at the airport.

*User Story - US3*\
As a traffic controller in the airport, I want to be able to instruct a plane to take off from the airport if the plane is currently at the airport, so there are no errors.

*Domain Model - DM3*
| Objects | Properties | Messages | Outputs |
| --- | ---| --- | --- |
| Plane   | id @String               | getId()                       | @String |
| Airport | airport @Array[@Planes]  | atAirport(@Plane)             | @Boolean|
| Airport | airport @Array[@Planes]  | instructToTakeOffPlane(@Plane)| @Void   |

*Unit Tests*\
Test 1 - A plane can be instructed to take off from the airport if the plane is at that airport (atAirport(@plane) -> True).

Test 2 - A plane can't be instructed to take off from the airport if the plane is not at that airport (atAirport(@plane) -> False).

**Additional Functional Requirements**

**FR4**

Planes must not be able to land if the weather is stormy

*User Story - US4*\
As a pilot, I want the system to prevent me from landing the plane when the weather is stormy, so that the landing is safe.

*Domain Model - DM4*

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Plane   | id @String               | getId()                            | @String |
| Weather | currentWeather @String   | isStormy()                         | @Boolean|
| Airport | weather@Weather          | setWeather(newWeather)             | @Void   |
| Airport | airport @Array[@Planes]  | landPlane(@Plane)                  | @Void   |

*Unit Tests*\
Test 1 - The system should prevent the plane from landing, returning a status indicating stormy weather.


**FR5**

Planes must not be able to take off if the weather is stormy

*User Story - US5*\
As a pilot, I want the system to prevent me from taking off the plane when the weather is stormy, so that the takeoff is safe.

*Domain Model - DM5*

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Plane   | id @String               | getId()                           | @String |
| Weather | currentWeather @String   | isStormy()                        | @Boolean|
| Airport | weather@Weather          | setWeather(newWeather)            | @Void   |
| Airport | airport @Array[@Planes]  | takeOffPlane(@Plane)              | @Void   |

*Unit Tests*
Test 1 - The system should prevent the plane from taking off, returning a status indicating stormy weather.

### Project Plan
The initial Trello Kanban  board
![Initial Kanban board](/images/initial-Kanban-board.png)

Progression Kanban boards

![Progression Kanban board - 16/01/2024 ](/images/progression-board-240116.JPG)

![Progression Kanban board - 17/01/2024 ](/images/progression-board-240117.JPG)

Final Kanban board
[Trello Kanban Board](https://trello.com/b/1tG3lkKF/airport-challenge)