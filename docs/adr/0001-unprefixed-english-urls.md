# English URLs stay unprefixed, via a rewrite rather than a redirect

The route tree is rooted at a Language segment, so every page has a Language in
its path. The framework's documented pattern for that shape is to redirect an
unprefixed request to the default Language's prefix, making `/cs/...` and
`/en/...` the only real URLs. We do the opposite: a proxy rewrites unprefixed
paths into the English segment, so English keeps the URLs it has today and only
Czech is prefixed.

The deciding factor is that the English URLs are already published. The flexiday
Case Study names its own unprefixed URL in its canonical link and its Open Graph
tags, and those URLs have been shared. A redirect would keep them reachable but
would move every page the site actually has, for the benefit of a Language that
did not exist yet.

## Consequences

- The proxy is on the request path for every page request, and its matcher is
  the only thing keeping it off assets. A mistake there breaks every stylesheet
  and image on the site, which is why the routing decision is a pure function
  with its own tests rather than logic inlined into the proxy.
- English pages are reachable at two URLs — `/` and `/en` — and the prefixed one
  is not canonical. Any page that declares a canonical link must declare the
  unprefixed form.
- Adding a third Language is one entry in the Language list. Making a different
  Language the unprefixed one is not: it would move published URLs, which is the
  thing this decision exists to avoid.
