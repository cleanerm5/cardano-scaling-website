import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import docsMetadataJson from '@site/static/docs-metadata.json'
import moment from 'moment'

interface Props { }

interface Metadata {
  lastUpdatedAt: string
  commitHash: string
}

const Display = {
  calculateRelativeTimeSince: (dateFrom: Date, dateTo: Date) => {
    const from = moment(dateFrom, true)
    const to = moment(dateTo, true)
    const value = from.from(to, true)
    const millisecondsDiff = from.diff(to)
    return { value, millisecondsDiff };
  }
  , renderLastUpdatedAt: (lastUpdatedAt: string) => {
    const timeSince =
      Display.calculateRelativeTimeSince(new Date(lastUpdatedAt), new Date)

    return <i className={styles.info}>
      Last updated at: <b>{lastUpdatedAt}</b>
      (<b>{timeSince.value}</b> since last change)
    </i>
  }
  , renderCommitHash: (commitHash: string) => {
      let link = `https://github.com/input-output-hk/hydra-poc/commit/${commitHash}`;
      return <i className={styles.info}>
        Last commit hash: <a href={link}><b>{commitHash}</b></a>
      </i>
    }
  , renderLastTranslatedAt: (sourceMetadata: Metadata, lastTranslatedAt: string) => {
    const timeSince =
      Display.calculateRelativeTimeSince(
        new Date(sourceMetadata.lastUpdatedAt),
        new Date(lastTranslatedAt)
      )

    // dont display warning on translated pages when up to date or above
    if (timeSince.millisecondsDiff >= 0) {
      return <></>
    }

    return <i className={styles.info}>
      Last translated at: <b>{lastTranslatedAt}</b>
      (⚠️ Warning: <b>{timeSince.value}</b> behind default language)
    </i>
  }
}

export default function DocumentMetadata({ }: Props): JSX.Element {
  const [documentPath, setDocumentPath] = useState('placeholder')

  useEffect(() => {
    if (window) {
      const path = new URL(window.location.href).pathname.replace('/head-protocol/', '')
      setDocumentPath(path)
    }
  }, [])

  // do not display metadata if page cannot access its location from the window.location.href
  // this is the case when the page is not rendered in the browser, like during `yarn build`
  if (documentPath == 'placeholder') {
    return <></>
  }

  const [maybeLanguage, ...restPath] = documentPath.split("/")
  const supportedLanguages = ['fr', 'ja'] //@TODO move to config
  const isTranslatedLanguage = supportedLanguages.includes(maybeLanguage)

  const path = isTranslatedLanguage ? restPath.join("/") : documentPath

  // do not display if document path is not found in docs-metadata.json
  if (docsMetadataJson[path] === undefined) {
    return <></>
  }

  const documentMetadata = docsMetadataJson[path]
  const sourceMetadata = documentMetadata["source"]

  // do not display if metadata for source language is not found in docs-metadata.json
  if (sourceMetadata === undefined) {
    return <></>
  }

  const metadata: Metadata = isTranslatedLanguage ? documentMetadata[maybeLanguage] : sourceMetadata

  // do not display if metadata for translated language is not found in docs-metadata.json
  if (metadata === undefined) {
    return <></>
  }

  const { lastUpdatedAt, commitHash } = metadata

  return <div className={styles.block}>
    {
      Display.renderLastUpdatedAt(lastUpdatedAt)
    }
    {
      Display.renderCommitHash(commitHash)
    }
    {
      isTranslatedLanguage &&
      Display.renderLastTranslatedAt(sourceMetadata, lastUpdatedAt)
    }
  </div >
}
