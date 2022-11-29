import React from "react";
import bpic1 from "../../Asset/blogPic/frame1.JPG";
import bpic2 from "../../Asset/blogPic/frame2.JPG";
import bpic3 from "../../Asset/blogPic/frame3.JPG";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="w-75 mx-auto bg-stone-200">
      <div className="w-9/12 mx-auto">
        <div className="text-center py-12">
          <h1 className="text-5xl font-bold">The Blog</h1>
        </div>

        <div>
          <h2 className="text-3xl font-bold my-5">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <div className="customP">
            <p>
              In modern React, we build our application with components which is
              JavaScript functions and reusable bits of code. The purpose of
              building the application with components is a clear separation,
              which makes code easier to understand, easier to maintain, and
              easier to reuse. A state is an object that holds information about
              a certain component
            </p>
            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter.
              <h6>
                There are four main types of state you need to properly manage
                in your React apps:
              </h6>
              <ol>
                <li> Local state</li>
                <li>Global state</li>
                <li>Server state</li>
                <li>URL state</li>
              </ol>
            </p>
            <p>
              Local (UI) state – Local state is data we manage in one or another
              component. Local state is most often managed in React using the
              useState hook. For example, local state would be needed to show or
              hide a modal component or to track values for a form component,
              such as form submission, when the form is disabled and the values
              of a form’s inputs.
            </p>
            <p>
              Global (UI) state – Global state is data we manage across multiple
              components. Global state is necessary when we want to get and
              update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global.
            </p>
            <p>
              Server state – Data that comes from an external server that must
              be integrated with our UI state. Server state is a simple concept,
              but can be hard to manage alongside all of our local and global UI
              state. There are several pieces of state that must be managed
              every time you fetch or update data from an external server,
              including loading and error state. Fortunately there are tools
              such as SWR and React Query that make managing server state much
              easier.
            </p>
            <p>
              URL state – Data that exists on our URLs, including the pathname
              and query parameters. URL state is often missing as a category of
              state, but it is an important one. In many cases, a lot of major
              parts of our application rely upon accessing URL state. Try to
              imagine building a blog without being able to fetch a post based
              off of its slug or id that is located in the URL! There are
              undoubtedly more pieces of state that we could identify, but these
              are the major categories worth focusing on for most applications
              you build.
            </p>
            <ol>
              <li>
                {" "}
                1.
                <a
                  className="link"
                  href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/"
                >
                  read More
                </a>
              </li>
              <li>
                2.{" "}
                <a
                  className="link"
                  href="https://www.freecodecamp.org/news/how-to-manage-state-in-a-react-app/"
                >
                  read More
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-5">
            How does prototypical inheritance work?
          </h2>
          <div className="customP">
            <p>
              In JavaScript, an object can inherit the properties of another
              object. Prototypes are the mechanism by which JavaScript objects
              inherit features from one another. a prototype is an inbuilt
              object where it associated with the functions by default, which
              can be accessible, and modifiable, and create new variables and
              methods to it and share across all the instances of its
              constructor function. The object from where the properties are
              inherited is called the prototype. In short, objects can inherit
              properties from other objects — the prototypes. inheritance solves
              the problem of data and logic duplication. By inheriting, objects
              can share properties and methods without the need of manually
              setting those properties and methods on each object. A prototype
              is a built-in property of the JavaScript object. The prototype is
              itself an object, so the prototype will have its own prototype,
              making what's called a prototype chain. The chain ends when we
              reach a prototype that has null for its own prototype
            </p>
            <p>
              When we try to access a property of an object, the property is not
              only searched in the object itself. It's also searched in the
              prototype of the object, in the prototype of the prototype, and so
              on – until a property is found that matches the name or the end of
              the prototype chain is reached. If the property or method isn’t
              found anywhere in the prototype chain, only then will JavaScript
              return undefined. Every object in JavaScript has an internal
              property called [[Prototype]].
            </p>
            <ol>
              <li>
                {" "}
                1.
                <a
                  className="link"
                  href="https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/#the-prototype-chain"
                >
                  read More
                </a>
              </li>
              <li>
                2.{" "}
                <a
                  className="link"
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
                >
                  read More
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-5">
            What is a unit test? Why should we write unit tests?
          </h2>
          <div className="customP">
            <p>
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages. Unit testing is a component of test-driven
              development (TDD), a pragmatic methodology that takes a meticulous
              approach to building a product by means of continual testing and
              revision. This testing method is also the first level of software
              testing, which is performed before other testing methods such as
              integration testing. Unit tests are typically isolated to ensure a
              unit does not rely on any external code or functions. Testing can
              be done manually but is often automated.
            </p>

            <p>
              <h6>How unit tests work</h6>A unit test typically comprises of
              three stages: plan, cases and scripting and the unit test itself.
              In the first step, the unit test is prepared and reviewed. The
              next step is for the test cases and scripts to be made, then the
              code is tested. Test-driven development requires that developers
              first write failing unit tests. Then they write code and refactor
              the application until the test passes. TDD typically results in an
              explicit and predictable code base. Each test case is tested
              independently in an isolated environment, as to ensure a lack of
              dependencies in the code. The software developer should code
              criteria to verify each test case, and a testing framework can be
              used to report any failed tests. Developers should not make a test
              for every line of code, as this may take up too much time.
              Developers should then create tests focusing on code which could
              affect the behavior of the software being developed. Unit testing
              involves only those characteristics that are vital to the
              performance of the unit under test. This encourages developers to
              modify the source code without immediate concerns about how such
              changes might affect the functioning of other units or the program
              as a whole. Once all of the units in a program have been found to
              be working in the most efficient and error-free manner possible,
              larger components of the program can be evaluated by means of
              integration testing. Unit tests should be performed frequently,
              and can be done manually or can be automated.
            </p>
            <p>
              <h6>Types of unit testing</h6>
              Unit tests can be performed manually or automated. Those employing
              a manual method may have an instinctual document made detailing
              each step in the process; however, automated testing is the more
              common method to unit tests. Automated approaches commonly use a
              testing framework to develop test cases. These frameworks are also
              set to flag and report any failed test cases while also providing
              a summary of test cases.
            </p>
            <h5> Advantages and disadvantages of unit testing</h5>
            <ul>
              <h6>Advantages to unit testing include: </h6>

              <li>
                The earlier a problem is identified, the fewer compound errors
                occur.
              </li>
              <li>
                Costs of fixing a problem early can quickly outweigh the cost of
                fixing it later.
              </li>
              <li>Debugging processes are made easier.</li>
              <li>Developers can quickly make changes to the code base.</li>
              <li>
                Developers can also re-use code, migrating it to new projects.
              </li>
            </ul>

            <ul>
              <h6>Disadvantages include:</h6>
              <li>Tests will not uncover every bug.</li>
              <li>
                Unit tests only test sets of data and its functionality—it will
                not catch errors in integration.
              </li>
              <li>
                More lines of test code may need to be written to test one line
                of code—creating a potential time investment.
              </li>
              <li>
                Unit testing may have a steep learning curve, for example,
                having to learn how to use specific automated software tools.
              </li>
            </ul>
            <ol>
              <li>
                {" "}
                1.
                <a
                  className="link"
                  href="https://www.techtarget.com/searchsoftwarequality/definition/unit-testing#:~:text=The%20main%20objective%20of%20unit,find%20in%20later%20testing%20stages."
                >
                  read More
                </a>
              </li>
              <li>
                2.{" "}
                <a
                  className="link"
                  href="https://www.guru99.com/unit-testing-guide.html"
                >
                  read More
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold my-5">
            React vs. Angular vs. Vue?
          </h2>
          <div className="customP">
            <h2>A Quick Comparison of Angular vs. React vs. Vue</h2>
            <p>
              Angular js, React js, and Vue js are among the top JavaScript
              frameworks that keep developing at an accelerated pace.
            </p>
            <p>
              After doing a thorough analysis of Angular vs React vs Vue we
              tried to sum up all in the comparison table for you to understand
              it in a better and easy way
            </p>
            <div className="text-center mx-auto">
              <img src={bpic1} alt="" />
              <img src={bpic2} alt="" />
              <img src={bpic3} alt="" />
            </div>
            <ol>
              <li>
                {" "}
                1.
                <a
                  className="link"
                  href="https://wpwebinfotech.com/blog/angular-vs-react-vs-vue/"
                >
                  read More
                </a>
              </li>
              <li>
                2.{" "}
                <a
                  className="link"
                  href="https://plainenglish.io/blog/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022"
                >
                  read More
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
