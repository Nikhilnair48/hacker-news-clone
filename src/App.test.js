import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import { shallow, mount } from "enzyme";
import configureStore from "./store";

const setUp = (initialState = {}) => {
  const { store, persistor } = configureStore();
  store.dispatch({ type: "GET_PAGE_SUCCESS", payload: initialState.stories });
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      stories: {
        hits: [
          {
            "created_at": "2020-06-16T15:50:35.000Z",
            "title": null,
            "url": null,
            "author": "luch",
            "points": null,
            "story_text": null,
            "comment_text":
              'Not sure if that\u0026#x27;s what you have in mind, but Microsoft now has an ARM-based product line :\u003ca href="https:\u0026#x2F;\u0026#x2F;techcrunch.com\u0026#x2F;2019\u0026#x2F;10\u0026#x2F;02\u0026#x2F;microsoft-launches-the-arm-based-surface-pro-x\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;techcrunch.com\u0026#x2F;2019\u0026#x2F;10\u0026#x2F;02\u0026#x2F;microsoft-launches-the-arm...\u003c/a\u003e\u003cp\u003eThey even implemented a x86 emulator in order to run your usual native software on it.',
            "num_comments": null,
            "story_id": 23538894,
            "story_title": "Apple, ARM, and Intel",
            "story_url":
              "https://stratechery.com/2020/apple-arm-and-intel/?href=",
            "parent_id": 23539258,
            "created_at_i": 1592322635,
            "_tags": ["comment", "author_luch", "story_23538894"],
            "objectID": "23540588",
            "_highlightResult": {
              "author": {
                "value": "luch",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'Not sure if that\'s what you have in mind, but Microsoft now has an ARM-based product line :\u003ca href="https://techcrunch.com/2019/10/02/microsoft-launches-the-arm-based-surface-pro-x/" rel="nofollow"\u003ehttps://techcrunch.com/2019/10/02/microsoft-launches-the-arm\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e\u003cp\u003eThey even implemented a x86 emulator in order to run your usual native software on it.',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Apple, ARM, and Intel",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://stratechery.com/2020/apple-arm-and-intel/?href=",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:50:06.000Z",
            "title": null,
            "url": null,
            "author": "JdeBP",
            "points": null,
            "story_text": null,
            "comment_text":
              'No, not like that.  At all, in fact.\u003cp\u003eThis is an XTerm FAQ, and you are not in the analogous situation that you purport to be in.  You are abusing \u0026quot;VT100\u0026quot; to describe the current state of affairs in the world; which is most definitely \u003ci\u003enot\u003c/i\u003e a DEC VT100, not like a DEC VT100, and most definitely different in many important respects (such as \u003ci\u003ecolour\u003c/i\u003e, for starters) to a DEC VT100.  It\u0026#x27;s even different to \u0026quot;ANSI\u0026quot; (again, which should be ECMA-48) in that no terminal or terminal emulator (that I know of) actually provides \u003ci\u003estandard\u003c/i\u003e function keys (function keys being another thing that a DEC VT100 does not have).  A few of them, sort of, provide the non-standard function keys from a VT220, which isn\u0026#x27;t a VT100 \u003ci\u003eeither\u003c/i\u003e.\u003cp\u003e* \u003ca href="https:\u0026#x2F;\u0026#x2F;invisible-island.net\u0026#x2F;xterm\u0026#x2F;xterm.faq.html#what_is_vt220" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;invisible-island.net\u0026#x2F;xterm\u0026#x2F;xterm.faq.html#what_is_vt...\u003c/a\u003e',
            "num_comments": null,
            "story_id": 23520240,
            "story_title":
              "Zsh and Fish’s simple but clever trick for highlighting missing linefeeds",
            "story_url": "https://www.vidarholen.net/contents/blog/?p=878",
            "parent_id": 23539443,
            "created_at_i": 1592322606,
            "_tags": ["comment", "author_JdeBP", "story_23520240"],
            "objectID": "23540583",
            "_highlightResult": {
              "author": {
                "value": "JdeBP",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'No, not like that.  At all, in fact.\u003cp\u003eThis is an XTerm FAQ, and you are not in the analogous situation that you purport to be in.  You are abusing \u0026quot;VT100\u0026quot; to describe the current state of affairs in the world; which is most definitely \u003ci\u003enot\u003c/i\u003e a DEC VT100, not like a DEC VT100, and most definitely different in many important respects (such as \u003ci\u003ecolour\u003c/i\u003e, for starters) to a DEC VT100.  It\'s even different to \u0026quot;ANSI\u0026quot; (again, which should be ECMA-48) in that no terminal or terminal emulator (that I know of) actually provides \u003ci\u003estandard\u003c/i\u003e function keys (function keys being another thing that a DEC VT100 does not have).  A few of them, sort of, provide the non-standard function keys from a VT220, which isn\'t a VT100 \u003ci\u003eeither\u003c/i\u003e.\u003cp\u003e* \u003ca href="https://invisible-island.net/xterm/xterm.faq.html#what_is_vt220" rel="nofollow"\u003ehttps://invisible-island.net/xterm/xterm.faq.html#what_is_vt\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Zsh and Fish’s simple but clever trick for highlighting missing linefeeds",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://www.vidarholen.net/contents/blog/?p=878",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:48:51.000Z",
            "title": null,
            "url": null,
            "author": "shpongled",
            "points": null,
            "story_text": null,
            "comment_text":
              "As someone about to graduate with a PhD in biochemistry who has been programming for ~10 years and personally used CRISPR\u0026#x2F;Cas9 ... the parent comment gave me a good laugh.\u003cp\u003eThat being said, I can see some applications to using ML to analyze the results of CRISPR\u0026#x2F;Cas9 screens or better predict functional editing sites - but that\u0026#x27;s not exactly exclusive to Cas9.",
            "num_comments": null,
            "story_id": 23537567,
            "story_title": "Very fast CRISPR on demand",
            "story_url": "https://science.sciencemag.org/content/368/6496/1265",
            "parent_id": 23540362,
            "created_at_i": 1592322531,
            "_tags": ["comment", "author_shpongled", "story_23537567"],
            "objectID": "23540570",
            "_highlightResult": {
              "author": {
                "value": "shpongled",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "As someone about to graduate with a PhD in biochemistry who has been programming for ~10 years and personally used CRISPR/Cas9 \u003cem\u003e...\u003c/em\u003e the parent comment gave me a good laugh.\u003cp\u003eThat being said, I can see some applications to using ML to analyze the results of CRISPR/Cas9 screens or better predict functional editing sites - but that's not exactly exclusive to Cas9.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Very fast CRISPR on demand",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://science.sciencemag.org/content/368/6496/1265",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:48:23.000Z",
            "title": null,
            "url": null,
            "author": "barbegal",
            "points": null,
            "story_text": null,
            "comment_text":
              "The author takes the following statement to be incorrect:\u003cp\u003e\u0026gt; I had written code for a constant-time text comparison of the MAC but then realized that this is not an issue when using the MAC-then-encrypt method because the MAC is only compared after decryption to verify that the data is intact and the same as when it was encrypted. Since the correct MAC is only exposed when the correct encryption key is used it doesn’t matter whether the text comparison is done in constant-time or not. Changing to an encrypt-then-MAC method (requiring a constant-time MAC comparison) would not be backwards compatible with the current version.\u003cp\u003eI don\u0026#x27;t see anything wrong with this statement. With encrypt-then-MAC the application is going to calculate the MAC on the ciphertext then compare it against the MAC included with the ciphertext. If the two match then the application will decrypt the ciphertext into plaintext. If the attacker doesn\u0026#x27;t actually know the encryption key then the data will be garbled but that might not matter for certain attacks. The key to the attack is getting the MAC correct and to do that timing attacks on the comparison can be done.\u003cp\u003eBut in this case we are using MAC-then-encrypt. The application is going to decrypt the ciphertext to produce plaintext and MAC. Every time the attacker changes the ciphertext both the MAC and the plaintext will change unpredictably. Even with the timing leak, the attacker can\u0026#x27;t do anything with the ciphertext to make it such that the MAC verifies the plaintext\u003cp\u003eOne of the key flaws of modern security protocols is making them robust to bad implementations and side channels. I don\u0026#x27;t see the problem as being reasoning by Lego but rather in neglecting that the information you wish to protect is not just in the ciphertext, it can leak out into everything, the length of the message, padding, MAC, timing...",
            "num_comments": null,
            "story_id": 23525609,
            "story_title":
              "Reasoning by Lego: The wrong way to think about cryptography",
            "story_url":
              "https://www.cryptofails.com/post/121201011592/reasoning-by-lego-the-wrong-way-to-think-about",
            "parent_id": 23525609,
            "created_at_i": 1592322503,
            "_tags": ["comment", "author_barbegal", "story_23525609"],
            "objectID": "23540563",
            "_highlightResult": {
              "author": {
                "value": "barbegal",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "The author takes the following statement to be incorrect:\u003cp\u003e\u0026gt; I had written code for a constant-time text comparison of the MAC but then realized that this is not an issue when using the MAC-then-encrypt method because the MAC is only compared after decryption to verify that the data is intact and the same as when it was encrypted. Since the correct MAC is only exposed when the correct encryption key is used it doesn’t matter whether the text comparison is done in constant-time or not. Changing to an encrypt-then-MAC method (requiring a constant-time MAC comparison) would not be backwards compatible with the current version.\u003cp\u003eI don't see anything wrong with this statement. With encrypt-then-MAC the application is going to calculate the MAC on the ciphertext then compare it against the MAC included with the ciphertext. If the two match then the application will decrypt the ciphertext into plaintext. If the attacker doesn't actually know the encryption key then the data will be garbled but that might not matter for certain attacks. The key to the attack is getting the MAC correct and to do that timing attacks on the comparison can be done.\u003cp\u003eBut in this case we are using MAC-then-encrypt. The application is going to decrypt the ciphertext to produce plaintext and MAC. Every time the attacker changes the ciphertext both the MAC and the plaintext will change unpredictably. Even with the timing leak, the attacker can't do anything with the ciphertext to make it such that the MAC verifies the plaintext\u003cp\u003eOne of the key flaws of modern security protocols is making them robust to bad implementations and side channels. I don't see the problem as being reasoning by Lego but rather in neglecting that the information you wish to protect is not just in the ciphertext, it can leak out into everything, the length of the message, padding, MAC, timing\u003cem\u003e...\u003c/em\u003e",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Reasoning by Lego: The wrong way to think about cryptography",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.cryptofails.com/post/121201011592/reasoning-by-lego-the-wrong-way-to-think-about",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:47:19.000Z",
            "title": null,
            "url": null,
            "author": "credit_guy",
            "points": null,
            "story_text": null,
            "comment_text":
              'Browsing wikipedia I found the concept of \u0026quot;Civilian police oversight agency\u0026quot; [1]. For example the City of Minneapolis has the \u0026quot;Office of Police Conduct Review\u0026quot; [2].\u003cp\u003eSo it looks like the institutions you are alluding to already exist, they probably need to be empowered more somehow.\u003cp\u003e[1] \u003ca href="https:\u0026#x2F;\u0026#x2F;en.wikipedia.org\u0026#x2F;wiki\u0026#x2F;Civilian_police_oversight_agency#List_of_places_with_civilian_oversight" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;en.wikipedia.org\u0026#x2F;wiki\u0026#x2F;Civilian_police_oversight_agen...\u003c/a\u003e\u003cp\u003e[2] \u003ca href="http:\u0026#x2F;\u0026#x2F;www.minneapolismn.gov\u0026#x2F;civilrights\u0026#x2F;policereview\u0026#x2F;" rel="nofollow"\u003ehttp:\u0026#x2F;\u0026#x2F;www.minneapolismn.gov\u0026#x2F;civilrights\u0026#x2F;policereview\u0026#x2F;\u003c/a\u003e',
            "num_comments": null,
            "story_id": 23528216,
            "story_title":
              "Supreme Court declines to hear cases over qualified immunity",
            "story_url":
              "https://www.cnbc.com/2020/06/15/supreme-court-declines-to-hear-cases-over-qualified-immunity.html",
            "parent_id": 23532039,
            "created_at_i": 1592322439,
            "_tags": ["comment", "author_credit_guy", "story_23528216"],
            "objectID": "23540548",
            "_highlightResult": {
              "author": {
                "value": "credit_guy",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'Browsing wikipedia I found the concept of \u0026quot;Civilian police oversight agency\u0026quot; [1]. For example the City of Minneapolis has the \u0026quot;Office of Police Conduct Review\u0026quot; [2].\u003cp\u003eSo it looks like the institutions you are alluding to already exist, they probably need to be empowered more somehow.\u003cp\u003e[1] \u003ca href="https://en.wikipedia.org/wiki/Civilian_police_oversight_agency#List_of_places_with_civilian_oversight" rel="nofollow"\u003ehttps://en.wikipedia.org/wiki/Civilian_police_oversight_agen\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e\u003cp\u003e[2] \u003ca href="http://www.minneapolismn.gov/civilrights/policereview/" rel="nofollow"\u003ehttp://www.minneapolismn.gov/civilrights/policereview/\u003c/a\u003e',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Supreme Court declines to hear cases over qualified immunity",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.cnbc.com/2020/06/15/supreme-court-declines-to-hear-cases-over-qualified-immunity.html",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:47:09.000Z",
            "title": null,
            "url": null,
            "author": "jhowell",
            "points": null,
            "story_text": null,
            "comment_text":
              'The question you ask, given the opinion you express on your blog here[1] seems extremely insensitive of the feelings of others. Can you share the reasons for this insensitivity?\u003cp\u003e[1] \u003ca href="https:\u0026#x2F;\u0026#x2F;web.archive.org\u0026#x2F;web\u0026#x2F;20200616121527\u0026#x2F;https:\u0026#x2F;\u0026#x2F;www.shaulbehr.com\u0026#x2F;single-post\u0026#x2F;2020\u0026#x2F;06\u0026#x2F;16\u0026#x2F;The-committee-to-eliminate-unsafe-language" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;web.archive.org\u0026#x2F;web\u0026#x2F;20200616121527\u0026#x2F;https:\u0026#x2F;\u0026#x2F;www.shaul...\u003c/a\u003e',
            "num_comments": null,
            "story_id": 23538598,
            "story_title":
              "Developers Debate Deleting 'Master' and 'Slave' Code Terminology",
            "story_url":
              "https://insights.dice.com/2020/06/16/developers-debate-deleting-master-slave-code-terminology/",
            "parent_id": 23538662,
            "created_at_i": 1592322429,
            "_tags": ["comment", "author_jhowell", "story_23538598"],
            "objectID": "23540545",
            "_highlightResult": {
              "author": {
                "value": "jhowell",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'The question you ask, given the opinion you express on your blog here[1] seems extremely insensitive of the feelings of others. Can you share the reasons for this insensitivity?\u003cp\u003e[1] \u003ca href="https://web.archive.org/web/20200616121527/https://www.shaulbehr.com/single-post/2020/06/16/The-committee-to-eliminate-unsafe-language" rel="nofollow"\u003ehttps://web.archive.org/web/20200616121527/https://www.shaul\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Developers Debate Deleting 'Master' and 'Slave' Code Terminology",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://insights.dice.com/2020/06/16/developers-debate-deleting-master-slave-code-terminology/",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:46:24.000Z",
            "title": null,
            "url": null,
            "author": "fanf2",
            "points": null,
            "story_text": null,
            "comment_text":
              'The first PhD in computing was David Wheeler in 1951 \u003ca href="https:\u0026#x2F;\u0026#x2F;en.wikipedia.org\u0026#x2F;wiki\u0026#x2F;David_Wheeler_(computer_scientist)" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;en.wikipedia.org\u0026#x2F;wiki\u0026#x2F;David_Wheeler_(computer_scient...\u003c/a\u003e',
            "num_comments": null,
            "story_id": 23524085,
            "story_title": "The First Woman PhD in Computer Science Was a Nun",
            "story_url":
              "https://www.mentalfloss.com/article/53178/first-woman-earn-phd-computer-science-was-nun",
            "parent_id": 23539428,
            "created_at_i": 1592322384,
            "_tags": ["comment", "author_fanf2", "story_23524085"],
            "objectID": "23540532",
            "_highlightResult": {
              "author": {
                "value": "fanf2",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'The first PhD in computing was David Wheeler in 1951 \u003ca href="https://en.wikipedia.org/wiki/David_Wheeler_(computer_scientist)" rel="nofollow"\u003ehttps://en.wikipedia.org/wiki/David_Wheeler_(computer_scient\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "The First Woman PhD in Computer Science Was a Nun",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.mentalfloss.com/article/53178/first-woman-earn-phd-computer-science-was-nun",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:46:04.000Z",
            "title": null,
            "url": null,
            "author": "wokwokwok",
            "points": null,
            "story_text": null,
            "comment_text":
              "\u0026gt; It may employ fewer people, but the productivity and economic benefit of the US manufacturing sector has simply not declined at all...\u003cp\u003eUnfortunately wanting something to be true, and it actually being true are not the same thing.\u003cp\u003eEven if a whole bunch of your peers say the same thing, it \u003ci\u003estill\u003c/i\u003e doesn’t make it true.\u003cp\u003eI’m not really sure what to say... please go and do some actual research on this topic.",
            "num_comments": null,
            "story_id": 23538894,
            "story_title": "Apple, ARM, and Intel",
            "story_url":
              "https://stratechery.com/2020/apple-arm-and-intel/?href=",
            "parent_id": 23540079,
            "created_at_i": 1592322364,
            "_tags": ["comment", "author_wokwokwok", "story_23538894"],
            "objectID": "23540527",
            "_highlightResult": {
              "author": {
                "value": "wokwokwok",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "\u0026gt; It may employ fewer people, but the productivity and economic benefit of the US manufacturing sector has simply not declined at all\u003cem\u003e...\u003c/em\u003e\u003cp\u003eUnfortunately wanting something to be true, and it actually being true are not the same thing.\u003cp\u003eEven if a whole bunch of your peers say the same thing, it \u003ci\u003estill\u003c/i\u003e doesn’t make it true.\u003cp\u003eI’m not really sure what to say\u003cem\u003e...\u003c/em\u003e please go and do some actual research on this topic.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Apple, ARM, and Intel",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://stratechery.com/2020/apple-arm-and-intel/?href=",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:45:20.000Z",
            "title": null,
            "url": null,
            "author": "shpongled",
            "points": null,
            "story_text": null,
            "comment_text":
              "Even in standard CRISPR\u0026#x2F;Cas9 systems, Cas9 sticks around for quite a while - which is one of the issues in using it for actual medical treatments. You don\u0026#x27;t really want a programmable DNA cleavage engine roaming around in your nucleus...\u003cp\u003eThe primary benefit here is that you can temporally synchronize Cas9. In standard systems, you introduce Cas9 into the cell, and you have no control over when it performs cleavage, since it\u0026#x27;s essentially a greedy cleavage mechanism - as soon as it finds a match, it cleaves.\u003cp\u003eThis system basically introduces a semaphore, so that you introduce Cas9, allow it find a match and pause. You can then signal for cleavage to begin. As stated in the abstract, this is useful for e.g. studying the kinetics of DNA repair, since you can control when DNA damage (Cas9 cleavage) is happening.",
            "num_comments": null,
            "story_id": 23537567,
            "story_title": "Very fast CRISPR on demand",
            "story_url": "https://science.sciencemag.org/content/368/6496/1265",
            "parent_id": 23540288,
            "created_at_i": 1592322320,
            "_tags": ["comment", "author_shpongled", "story_23537567"],
            "objectID": "23540518",
            "_highlightResult": {
              "author": {
                "value": "shpongled",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "Even in standard CRISPR/Cas9 systems, Cas9 sticks around for quite a while - which is one of the issues in using it for actual medical treatments. You don't really want a programmable DNA cleavage engine roaming around in your nucleus\u003cem\u003e...\u003c/em\u003e\u003cp\u003eThe primary benefit here is that you can temporally synchronize Cas9. In standard systems, you introduce Cas9 into the cell, and you have no control over when it performs cleavage, since it's essentially a greedy cleavage mechanism - as soon as it finds a match, it cleaves.\u003cp\u003eThis system basically introduces a semaphore, so that you introduce Cas9, allow it find a match and pause. You can then signal for cleavage to begin. As stated in the abstract, this is useful for e.g. studying the kinetics of DNA repair, since you can control when DNA damage (Cas9 cleavage) is happening.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Very fast CRISPR on demand",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://science.sciencemag.org/content/368/6496/1265",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:45:12.000Z",
            "title": null,
            "url": null,
            "author": "meroje",
            "points": null,
            "story_text": null,
            "comment_text":
              'Good time to remind everyone that the password prompt from Dropbox (in the screenshots, located right below the \u0026quot;Turn on notifications\u0026quot; from the OS) is fake. They pretend to use the password only to turn on accessibility permissions.\u003cp\u003e\u003ca href="https:\u0026#x2F;\u0026#x2F;forums.macrumors.com\u0026#x2F;threads\u0026#x2F;dropbox-responds-to-mac-security-risk-accusations-updated.1994702\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;forums.macrumors.com\u0026#x2F;threads\u0026#x2F;dropbox-responds-to-mac...\u003c/a\u003e',
            "num_comments": null,
            "story_id": 23537243,
            "story_title": "Computers as I used to love them",
            "story_url": "https://tonsky.me/blog/syncthing/",
            "parent_id": 23537243,
            "created_at_i": 1592322312,
            "_tags": ["comment", "author_meroje", "story_23537243"],
            "objectID": "23540513",
            "_highlightResult": {
              "author": {
                "value": "meroje",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'Good time to remind everyone that the password prompt from Dropbox (in the screenshots, located right below the \u0026quot;Turn on notifications\u0026quot; from the OS) is fake. They pretend to use the password only to turn on accessibility permissions.\u003cp\u003e\u003ca href="https://forums.macrumors.com/threads/dropbox-responds-to-mac-security-risk-accusations-updated.1994702/" rel="nofollow"\u003ehttps://forums.macrumors.com/threads/dropbox-responds-to-mac\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Computers as I used to love them",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://tonsky.me/blog/syncthing/",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:44:00.000Z",
            "title": null,
            "url": null,
            "author": "flipcoder",
            "points": null,
            "story_text": null,
            "comment_text":
              '\u003ca href="https:\u0026#x2F;\u0026#x2F;techcrunch.com\u0026#x2F;2011\u0026#x2F;06\u0026#x2F;20\u0026#x2F;dropbox-security-bug-made-passwords-optional-for-four-hours\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;techcrunch.com\u0026#x2F;2011\u0026#x2F;06\u0026#x2F;20\u0026#x2F;dropbox-security-bug-made-...\u003c/a\u003e\u003cp\u003e\u003ca href="https:\u0026#x2F;\u0026#x2F;www.washingtonpost.com\u0026#x2F;news\u0026#x2F;the-switch\u0026#x2F;wp\u0026#x2F;2016\u0026#x2F;09\u0026#x2F;07\u0026#x2F;hacked-dropbox-data-of-68-million-users-is-now-or-sale-on-the-dark-web\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.washingtonpost.com\u0026#x2F;news\u0026#x2F;the-switch\u0026#x2F;wp\u0026#x2F;2016\u0026#x2F;09\u0026#x2F;07...\u003c/a\u003e\u003cp\u003elol',
            "num_comments": null,
            "story_id": 23539206,
            "story_title":
              "Dropbox officially launches its own password manager and a secure vault",
            "story_url":
              "https://www.theverge.com/2020/6/16/21290101/dropbox-passwords-manager-vault-computer-backup-hellosign-app-center",
            "parent_id": 23539206,
            "created_at_i": 1592322240,
            "_tags": ["comment", "author_flipcoder", "story_23539206"],
            "objectID": "23540503",
            "_highlightResult": {
              "author": {
                "value": "flipcoder",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  '\u003ca href="https://techcrunch.com/2011/06/20/dropbox-security-bug-made-passwords-optional-for-four-hours/" rel="nofollow"\u003ehttps://techcrunch.com/2011/06/20/dropbox-security-bug-made\u003cem\u003e-...\u003c/em\u003e\u003c/a\u003e\u003cp\u003e\u003ca href="https://www.washingtonpost.com/news/the-switch/wp/2016/09/07/hacked-dropbox-data-of-68-million-users-is-now-or-sale-on-the-dark-web/" rel="nofollow"\u003ehttps://www.washingtonpost.com/news/the-switch/wp/2016/09/07\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e\u003cp\u003elol',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Dropbox officially launches its own password manager and a secure vault",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.theverge.com/2020/6/16/21290101/dropbox-passwords-manager-vault-computer-backup-hellosign-app-center",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:43:24.000Z",
            "title": null,
            "url": null,
            "author": "koheripbal",
            "points": null,
            "story_text": null,
            "comment_text":
              "That\u0026#x27;s the problem with evolution.  Any protein in the body ends up with multiple completely unrelated functions.\u003cp\u003eIf it\u0026#x27;s in the blood stream for enough generations, the body will find some alternate use for it.  It\u0026#x27;s like a compression algorithm on your DNA.\u003cp\u003e...and so when we try to use meds to counter certain proteins or block receptors, we discover that it has a dozen totally unrelated impacts.   \u0026quot;Oh, that blood pressure medication?  Well let\u0026#x27;s just have it also randomly give you prostate cancer!\u0026quot; (real example).\u003cp\u003eOrganic evolved animals are the worst type of spaghetti code - if there was ever something you\u0026#x27;d want to redesign from the ground up, it\u0026#x27;s us.\u003cp\u003eThen add to that that there isn\u0026#x27;t even any \u0026quot;standard\u0026quot; type of human.  We\u0026#x27;re all different - and even different groups of us have different smatterings of genes.  Sometimes it correlates with our ancestors background - sometimes it doesn\u0026#x27;t.  Who knows!  Evolution!  We\u0026#x27;re all each just individual experiments running around to see which genes can procreate the most.\u003cp\u003e...and it\u0026#x27;s not even as though each of us is a single experiment on a specific gene, that would be too easy.  We\u0026#x27;re each an experiment on a unique collection of thousands of genes that evolution hopes will average out the results across the entire population.  Try to wrap your statistics PhD around that!\u003cp\u003eThen also factor in that modern human evolutionary pressures are \u003ci\u003etotally\u003c/i\u003e different than they were even a couple of generations ago, and it becomes clearly evident that evolution is in a complete state of dysfunctional disarray.",
            "num_comments": null,
            "story_id": 23538131,
            "story_title": "Dexamethasone is a life-saving coronavirus drug",
            "story_url": "https://www.bbc.com/news/health-53061281",
            "parent_id": 23539743,
            "created_at_i": 1592322204,
            "_tags": ["comment", "author_koheripbal", "story_23538131"],
            "objectID": "23540497",
            "_highlightResult": {
              "author": {
                "value": "koheripbal",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "That's the problem with evolution.  Any protein in the body ends up with multiple completely unrelated functions.\u003cp\u003eIf it's in the blood stream for enough generations, the body will find some alternate use for it.  It's like a compression algorithm on your DNA.\u003cp\u003e\u003cem\u003e...\u003c/em\u003eand so when we try to use meds to counter certain proteins or block receptors, we discover that it has a dozen totally unrelated impacts.   \u0026quot;Oh, that blood pressure medication?  Well let's just have it also randomly give you prostate cancer!\u0026quot; (real example).\u003cp\u003eOrganic evolved animals are the worst type of spaghetti code - if there was ever something you'd want to redesign from the ground up, it's us.\u003cp\u003eThen add to that that there isn't even any \u0026quot;standard\u0026quot; type of human.  We're all different - and even different groups of us have different smatterings of genes.  Sometimes it correlates with our ancestors background - sometimes it doesn't.  Who knows!  Evolution!  We're all each just individual experiments running around to see which genes can procreate the most.\u003cp\u003e\u003cem\u003e...\u003c/em\u003eand it's not even as though each of us is a single experiment on a specific gene, that would be too easy.  We're each an experiment on a unique collection of thousands of genes that evolution hopes will average out the results across the entire population.  Try to wrap your statistics PhD around that!\u003cp\u003eThen also factor in that modern human evolutionary pressures are \u003ci\u003etotally\u003c/i\u003e different than they were even a couple of generations ago, and it becomes clearly evident that evolution is in a complete state of dysfunctional disarray.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Dexamethasone is a life-saving coronavirus drug",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://www.bbc.com/news/health-53061281",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:42:43.000Z",
            "title": "Ask HN: JavaScript library to add video chat?",
            "url": null,
            "author": "amateurgamedev",
            "points": 1,
            "story_text":
              "So, I have been building a bunch of very basic little games recently to play with family and friends while we are unable to visit in person.  We set up zoom with like 5-8 people, and switch back and forth between the video call and the game in the browser (I\u0026#x27;m learning about React + SVG + WebSockets...)\u003cp\u003eBut what I really want is just to embed video chat into the game itself.  Is there any library\u0026#x2F;service I can use where I can just drop it in?  I looked at twilio, but it seems so complicated.  What I want is just to add a few lines of JS and get video call functionality.\u003cp\u003eIs there a way to do it, or am I asking too much?",
            "comment_text": null,
            "num_comments": 0,
            "story_id": null,
            "story_title": null,
            "story_url": null,
            "parent_id": null,
            "created_at_i": 1592322163,
            "_tags": [
              "story",
              "author_amateurgamedev",
              "story_23540487",
              "ask_hn"
            ],
            "objectID": "23540487",
            "_highlightResult": {
              "title": {
                "value": "Ask HN: JavaScript library to add video chat?",
                "matchLevel": "none",
                "matchedWords": []
              },
              "author": {
                "value": "amateurgamedev",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_text": {
                "value":
                  "So, I have been building a bunch of very basic little games recently to play with family and friends while we are unable to visit in person.  We set up zoom with like 5-8 people, and switch back and forth between the video call and the game in the browser (I'm learning about React + SVG + WebSockets\u003cem\u003e...\u003c/em\u003e)\u003cp\u003eBut what I really want is just to embed video chat into the game itself.  Is there any library/service I can use where I can just drop it in?  I looked at twilio, but it seems so complicated.  What I want is just to add a few lines of JS and get video call functionality.\u003cp\u003eIs there a way to do it, or am I asking too much?",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              }
            }
          },
          {
            "created_at": "2020-06-16T15:40:03.000Z",
            "title": null,
            "url": null,
            "author": "greypowerOz",
            "points": null,
            "story_text": null,
            "comment_text":
              'with respect this yt review of the item talks too long and as best i can see does NOT even test \u0026#x2F; demo this item? Just (eventually...) talks about a 3rd party review?\u003cp\u003e\u003ca href="https:\u0026#x2F;\u0026#x2F;mobile.twitter.com\u0026#x2F;Ascii211\u0026#x2F;status\u0026#x2F;1268631069051453448" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;mobile.twitter.com\u0026#x2F;Ascii211\u0026#x2F;status\u0026#x2F;12686310690514534...\u003c/a\u003e\u003cp\u003esorry for any bad attitude. just found the yt vid irritatingly slow, repetitive and in the end not even from a user of this device.',
            "num_comments": null,
            "story_id": 23539788,
            "story_title":
              "New $11 HDMI video capture card outperforms the $280 market leader in 1080p",
            "story_url": "https://www.youtube.com/watch?v=qlrtAUCDFAQ",
            "parent_id": 23539788,
            "created_at_i": 1592322003,
            "_tags": ["comment", "author_greypowerOz", "story_23539788"],
            "objectID": "23540454",
            "_highlightResult": {
              "author": {
                "value": "greypowerOz",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'with respect this yt review of the item talks too long and as best i can see does NOT even test / demo this item? Just (eventually\u003cem\u003e...\u003c/em\u003e) talks about a 3rd party review?\u003cp\u003e\u003ca href="https://mobile.twitter.com/Ascii211/status/1268631069051453448" rel="nofollow"\u003ehttps://mobile.twitter.com/Ascii211/status/12686310690514534\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e\u003cp\u003esorry for any bad attitude. just found the yt vid irritatingly slow, repetitive and in the end not even from a user of this device.',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "New $11 HDMI video capture card outperforms the $280 market leader in 1080p",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://www.youtube.com/watch?v=qlrtAUCDFAQ",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:39:50.000Z",
            "title": null,
            "url": null,
            "author": "Robotbeat",
            "points": null,
            "story_text": null,
            "comment_text":
              'It\u0026#x27;s the typical EPA range figure that everyone has to use. It\u0026#x27;s already greater than more than a few mid-size SUVs, such as this BMW: \u003ca href="https:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;research\u0026#x2F;bmw-x6_m-2017\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;research\u0026#x2F;bmw-x6_m-2017\u0026#x2F;\u003c/a\u003e\u003cp\u003eOr this Lexus:\n\u003ca href="https:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;research\u0026#x2F;lexus-gx_460-2017\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;research\u0026#x2F;lexus-gx_460-2017\u0026#x2F;\u003c/a\u003e\u003cp\u003eOr this Lincoln:\n\u003ca href="https:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;research\u0026#x2F;lincoln-mkt-2017\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;research\u0026#x2F;lincoln-mkt-2017\u0026#x2F;\u003c/a\u003e\u003cp\u003eOf this list of 2017 mid-size SUVs, this Model S at 402 miles of EPA range goes further on a charge than 9 out of 32 of these vehicles for which range is given:\n\u003ca href="https:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;articles\u0026#x2F;2017-mid-size-suv-driving-ranges-1420693064532\u0026#x2F;" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.cars.com\u0026#x2F;articles\u0026#x2F;2017-mid-size-suv-driving-rang...\u003c/a\u003e',
            "num_comments": null,
            "story_id": 23539522,
            "story_title":
              "Tesla cuts Model S price by $5k, bumps range to 402 miles",
            "story_url":
              "https://arstechnica.com/cars/2020/06/tesla-cuts-model-s-price-by-5000-bumps-range-to-402-miles/",
            "parent_id": 23540077,
            "created_at_i": 1592321990,
            "_tags": ["comment", "author_Robotbeat", "story_23539522"],
            "objectID": "23540449",
            "_highlightResult": {
              "author": {
                "value": "Robotbeat",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  'It\'s the typical EPA range figure that everyone has to use. It\'s already greater than more than a few mid-size SUVs, such as this BMW: \u003ca href="https://www.cars.com/research/bmw-x6_m-2017/" rel="nofollow"\u003ehttps://www.cars.com/research/bmw-x6_m-2017/\u003c/a\u003e\u003cp\u003eOr this Lexus:\n\u003ca href="https://www.cars.com/research/lexus-gx_460-2017/" rel="nofollow"\u003ehttps://www.cars.com/research/lexus-gx_460-2017/\u003c/a\u003e\u003cp\u003eOr this Lincoln:\n\u003ca href="https://www.cars.com/research/lincoln-mkt-2017/" rel="nofollow"\u003ehttps://www.cars.com/research/lincoln-mkt-2017/\u003c/a\u003e\u003cp\u003eOf this list of 2017 mid-size SUVs, this Model S at 402 miles of EPA range goes further on a charge than 9 out of 32 of these vehicles for which range is given:\n\u003ca href="https://www.cars.com/articles/2017-mid-size-suv-driving-ranges-1420693064532/" rel="nofollow"\u003ehttps://www.cars.com/articles/2017-mid-size-suv-driving-rang\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Tesla cuts Model S price by $5k, bumps range to 402 miles",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://arstechnica.com/cars/2020/06/tesla-cuts-model-s-price-by-5000-bumps-range-to-402-miles/",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:39:48.000Z",
            "title": null,
            "url": null,
            "author": "downerending",
            "points": null,
            "story_text": null,
            "comment_text":
              "\u0026gt; People wouldnt procrastinate if there wasn\u0026#x27;t some evolutionary advantage...\u003cp\u003eThe awful truth is that \u0026quot;doing nothing\u0026quot; or at least \u0026quot;waiting a bit\u0026quot; is quite often the right thing to do from a survival perspective.",
            "num_comments": null,
            "story_id": 23537317,
            "story_title":
              "Procrastination is driven by our desire to avoid difficult emotions, says expert",
            "story_url":
              "https://www.cbc.ca/radio/thesundayedition/the-sunday-edition-for-june-14-2020-1.5604357/there-s-a-reason-we-procrastinate-and-it-s-not-laziness-1.5604433",
            "parent_id": 23537844,
            "created_at_i": 1592321988,
            "_tags": ["comment", "author_downerending", "story_23537317"],
            "objectID": "23540447",
            "_highlightResult": {
              "author": {
                "value": "downerending",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "\u0026gt; People wouldnt procrastinate if there wasn't some evolutionary advantage\u003cem\u003e...\u003c/em\u003e\u003cp\u003eThe awful truth is that \u0026quot;doing nothing\u0026quot; or at least \u0026quot;waiting a bit\u0026quot; is quite often the right thing to do from a survival perspective.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Procrastination is driven by our desire to avoid difficult emotions, says expert",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.cbc.ca/radio/thesundayedition/the-sunday-edition-for-june-14-2020-1.5604357/there-s-a-reason-we-procrastinate-and-it-s-not-laziness-1.5604433",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:39:29.000Z",
            "title": null,
            "url": null,
            "author": "chimprich",
            "points": null,
            "story_text": null,
            "comment_text":
              '\u0026gt; And I don’t think anyone’s saying the Oxford candidate vaccine will actually be available and approved for mass use this year?\u003cp\u003eThat genuinely is the goal. The current aim is October I believe. A quote from their website says \u0026quot;deliveries starting by the end of 2020\u0026quot;.\u003cp\u003e\u003ca href="https:\u0026#x2F;\u0026#x2F;www.ovg.ox.ac.uk\u0026#x2F;news\u0026#x2F;astrazeneca-to-supply-europe-with-up-to-400-million-doses-of-oxford-university2019s-vaccine-at-no-profit" rel="nofollow"\u003ehttps:\u0026#x2F;\u0026#x2F;www.ovg.ox.ac.uk\u0026#x2F;news\u0026#x2F;astrazeneca-to-supply-europe-w...\u003c/a\u003e\u003cp\u003eThat assumes everything goes well, which is a big if, but seems possible. The fact we\u0026#x27;ve had no bad news so far despite the advanced trials is good news.',
            "num_comments": null,
            "story_id": 23538131,
            "story_title": "Dexamethasone is a life-saving coronavirus drug",
            "story_url": "https://www.bbc.com/news/health-53061281",
            "parent_id": 23539758,
            "created_at_i": 1592321969,
            "_tags": ["comment", "author_chimprich", "story_23538131"],
            "objectID": "23540441",
            "_highlightResult": {
              "author": {
                "value": "chimprich",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  '\u0026gt; And I don’t think anyone’s saying the Oxford candidate vaccine will actually be available and approved for mass use this year?\u003cp\u003eThat genuinely is the goal. The current aim is October I believe. A quote from their website says \u0026quot;deliveries starting by the end of 2020\u0026quot;.\u003cp\u003e\u003ca href="https://www.ovg.ox.ac.uk/news/astrazeneca-to-supply-europe-with-up-to-400-million-doses-of-oxford-university2019s-vaccine-at-no-profit" rel="nofollow"\u003ehttps://www.ovg.ox.ac.uk/news/astrazeneca-to-supply-europe-w\u003cem\u003e...\u003c/em\u003e\u003c/a\u003e\u003cp\u003eThat assumes everything goes well, which is a big if, but seems possible. The fact we\'ve had no bad news so far despite the advanced trials is good news.',
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Dexamethasone is a life-saving coronavirus drug",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value": "https://www.bbc.com/news/health-53061281",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:39:24.000Z",
            "title": null,
            "url": null,
            "author": "jrochkind1",
            "points": null,
            "story_text": null,
            "comment_text":
              "You realize that not everyone in an organization would have agreed with not working with Nazi Germany either?\u003cp\u003eIBM literally sold them information retrieval technology they used to keep track of concentration camp inmates. So clearly the important decision-makers did not agree.\u003cp\u003eI guess it is like any other question of what an organization should do. Those with the power to make decisions will decide based on some combination of their own ethical standards or (more likely) what think they is \u0026quot;good for the business\u0026quot;, where PR as well as employee morale are components of that. The employees without the power to decide directly can organize to try to convince those with the power to make decisions of the correct ethical choice, or of what\u0026#x27;s good for the business, or to try to change the calculus of what\u0026#x27;s good for the business by effecting PR and employee morale etc.\u003cp\u003eI mean, this is kind of just a description of how human organizations or collective decision-making works....\u003cp\u003eI personally think that what ICE is doing is absolutely immoral and unethical, putting people, including asylum seekers, into (yes I think it\u0026#x27;s appropriate language) concentration camps, without a trial or hearing or access to a lawyer, in unsafe conditions (covid makes this even more extreme), separating children from parents, etc.  If we looked for an external arbiter of this, I think it also clearly violates international law and agreements on the rights of migrants and refugees, so that could be another argument, don\u0026#x27;t sell software to organizations that will use it to violate international law.\u003cp\u003eI personally wouldn\u0026#x27;t at this point call for github (or anyone) to avoid business with the federal governmetn entirely -- just to avoid your products being used for \u003ci\u003ethe programs\u003c/i\u003e that are violating international human rights. That is, avoid doing business with ICE, for sure. Maybe with DHS in general, or particular programs\u0026#x2F;units in DHS.\u003cp\u003eI can\u0026#x27;t make you agree. People disagree, this is part of human life.  But if I were in github, I\u0026#x27;d be working to convince other co-workers of this, and to convince decision-makers leaders of it, as those in the article are presumably doing (I still can\u0026#x27;t read the article because paywall, so I\u0026#x27;m only guessing as I think most commenting are!) This is how humans in organizations work.",
            "num_comments": null,
            "story_id": 23528224,
            "story_title":
              "After GitHub CEO backs Black Lives Matter, workers demand an end to ICE contract",
            "story_url":
              "https://www.latimes.com/business/technology/story/2020-06-12/github-ceo-black-lives-matter-employees-demand-end-ice-contract",
            "parent_id": 23536846,
            "created_at_i": 1592321964,
            "_tags": ["comment", "author_jrochkind1", "story_23528224"],
            "objectID": "23540440",
            "_highlightResult": {
              "author": {
                "value": "jrochkind1",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "You realize that not everyone in an organization would have agreed with not working with Nazi Germany either?\u003cp\u003eIBM literally sold them information retrieval technology they used to keep track of concentration camp inmates. So clearly the important decision-makers did not agree.\u003cp\u003eI guess it is like any other question of what an organization should do. Those with the power to make decisions will decide based on some combination of their own ethical standards or (more likely) what think they is \u0026quot;good for the business\u0026quot;, where PR as well as employee morale are components of that. The employees without the power to decide directly can organize to try to convince those with the power to make decisions of the correct ethical choice, or of what's good for the business, or to try to change the calculus of what's good for the business by effecting PR and employee morale etc.\u003cp\u003eI mean, this is kind of just a description of how human organizations or collective decision-making works\u003cem\u003e...\u003c/em\u003e.\u003cp\u003eI personally think that what ICE is doing is absolutely immoral and unethical, putting people, including asylum seekers, into (yes I think it's appropriate language) concentration camps, without a trial or hearing or access to a lawyer, in unsafe conditions (covid makes this even more extreme), separating children from parents, etc.  If we looked for an external arbiter of this, I think it also clearly violates international law and agreements on the rights of migrants and refugees, so that could be another argument, don't sell software to organizations that will use it to violate international law.\u003cp\u003eI personally wouldn't at this point call for github (or anyone) to avoid business with the federal governmetn entirely -- just to avoid your products being used for \u003ci\u003ethe programs\u003c/i\u003e that are violating international human rights. That is, avoid doing business with ICE, for sure. Maybe with DHS in general, or particular programs/units in DHS.\u003cp\u003eI can't make you agree. People disagree, this is part of human life.  But if I were in github, I'd be working to convince other co-workers of this, and to convince decision-makers leaders of it, as those in the article are presumably doing (I still can't read the article because paywall, so I'm only guessing as I think most commenting are!) This is how humans in organizations work.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "After GitHub CEO backs Black Lives Matter, workers demand an end to ICE contract",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.latimes.com/business/technology/story/2020-06-12/github-ceo-black-lives-matter-employees-demand-end-ice-contract",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:37:52.000Z",
            "title": null,
            "url": null,
            "author": "olivierduval",
            "points": null,
            "story_text": null,
            "comment_text":
              "Allowing Blue Team to fight back maybe? Or to be able to actively track the red team instead, using an active defense, instead of only passive defense?\u003cp\u003eMoreover, the outcomes are different for both teams:\u003cp\u003e- RedTeam success =\u0026gt; they are seen as \u0026quot;real\u0026quot; hackers\u0026#x2F;heros and the BlueTeam are the poor incompetent\u003cp\u003e- RedTeam fail =\u0026gt; the BlueTeam did \u0026quot;only\u0026quot; its job, the investments in cybersec for the company paid off... so the budget for the cybersec can be reduced.\u003cp\u003eSo, for RedTeam, it\u0026#x27;s either a win or a tie. And for BlueTeam it\u0026#x27;s either a tie or a loss...\u003cp\u003eIf the BlueTeam could fight back, maybe this could change...",
            "num_comments": null,
            "story_id": 23538903,
            "story_title":
              "Elite CIA unit that developed hacking tools failed to secure its own systems",
            "story_url":
              "https://www.washingtonpost.com/national-security/elite-cia-unit-that-developed-hacking-tools-failed-to-secure-its-own-systems-allowing-massive-leak-an-internal-report-found/2020/06/15/502e3456-ae9d-11ea-8f56-63f38c990077_story.html",
            "parent_id": 23540148,
            "created_at_i": 1592321872,
            "_tags": ["comment", "author_olivierduval", "story_23538903"],
            "objectID": "23540424",
            "_highlightResult": {
              "author": {
                "value": "olivierduval",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "Allowing Blue Team to fight back maybe? Or to be able to actively track the red team instead, using an active defense, instead of only passive defense?\u003cp\u003eMoreover, the outcomes are different for both teams:\u003cp\u003e- RedTeam success =\u0026gt; they are seen as \u0026quot;real\u0026quot; hackers/heros and the BlueTeam are the poor incompetent\u003cp\u003e- RedTeam fail =\u0026gt; the BlueTeam did \u0026quot;only\u0026quot; its job, the investments in cybersec for the company paid off\u003cem\u003e...\u003c/em\u003e so the budget for the cybersec can be reduced.\u003cp\u003eSo, for RedTeam, it's either a win or a tie. And for BlueTeam it's either a tie or a loss\u003cem\u003e...\u003c/em\u003e\u003cp\u003eIf the BlueTeam could fight back, maybe this could change\u003cem\u003e...\u003c/em\u003e",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value":
                  "Elite CIA unit that developed hacking tools failed to secure its own systems",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://www.washingtonpost.com/national-security/elite-cia-unit-that-developed-hacking-tools-failed-to-secure-its-own-systems-allowing-massive-leak-an-internal-report-found/2020/06/15/502e3456-ae9d-11ea-8f56-63f38c990077_story.html",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          },
          {
            "created_at": "2020-06-16T15:37:28.000Z",
            "title": null,
            "url": null,
            "author": "duxup",
            "points": null,
            "story_text": null,
            "comment_text":
              "Yeah hooks have such a low barrier to entry as far as ... just make a new component with hooks.   There is less code, it\u0026#x27;s easy to do, anyone who has seen a class component doesn\u0026#x27;t need much of an introduction to understand it.\u003cp\u003eI\u0026#x27;ve got class heavy applications that will stay class heavy, but almost all new components are hooks and they\u0026#x27;re quick to write, evaluate what is going on, and work with.",
            "num_comments": null,
            "story_id": 23538473,
            "story_title": "Do Not Follow JavaScript Trends",
            "story_url":
              "https://pragmaticpineapple.com/do-not-follow-javascript-trends/",
            "parent_id": 23540194,
            "created_at_i": 1592321848,
            "_tags": ["comment", "author_duxup", "story_23538473"],
            "objectID": "23540418",
            "_highlightResult": {
              "author": {
                "value": "duxup",
                "matchLevel": "none",
                "matchedWords": []
              },
              "comment_text": {
                "value":
                  "Yeah hooks have such a low barrier to entry as far as \u003cem\u003e...\u003c/em\u003e just make a new component with hooks.   There is less code, it's easy to do, anyone who has seen a class component doesn't need much of an introduction to understand it.\u003cp\u003eI've got class heavy applications that will stay class heavy, but almost all new components are hooks and they're quick to write, evaluate what is going on, and work with.",
                "matchLevel": "full",
                "fullyHighlighted": false,
                "matchedWords": [".", ".", "."]
              },
              "story_title": {
                "value": "Do Not Follow JavaScript Trends",
                "matchLevel": "none",
                "matchedWords": []
              },
              "story_url": {
                "value":
                  "https://pragmaticpineapple.com/do-not-follow-javascript-trends/",
                "matchLevel": "none",
                "matchedWords": []
              }
            }
          }
        ]
      }
    };
    wrapper = setUp(initialState);
  });

  it("Render without errors", () => {
    expect(wrapper).toBeDefined();
  });

  it("Render table header", () => {
    expect(wrapper.text()).toContain("Comments");
  });
});
